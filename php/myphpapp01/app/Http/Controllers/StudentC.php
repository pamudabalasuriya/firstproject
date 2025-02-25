<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentC extends Controller
{
    // Display list of students
    public function index()
    {
        $students = Student::all();
        return view('student.index', compact('students'));
    }

    // Show form to create a new student
    public function create()
    {
        return view('student.create');
    }

    // Store a new student in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'age' => 'required|integer',
            'subject' => 'required|max:255',
        ]);

        Student::create($request->all());
        return redirect()->route('students.index');
    }

    // Show form to edit a student
    public function edit($id)
    {
        $student = Student::findOrFail($id);
        return view('student.edit', compact('student'));
    }

    // Update student details in the database
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255',
            'age' => 'required|integer',
            'subject' => 'required|max:255',
        ]);

        $student = Student::findOrFail($id);
        $student->update($request->all());

        return redirect()->route('students.index');
    }

    // Delete a student from the database
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return redirect()->route('students.index');
    }
}
