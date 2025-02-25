<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookC extends Controller
{
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    public function create(Request $request)
    {
        $book = new Book;
        $book->name = $request->name;
        $book->author = $request->author;
        $book ->save();
        return response()-> json(["message"=>"Book Added"],201);
    }

    public function show($id)
    {
        $book = BOOK::find($id);
        if(!empty($book)) {
            return response()->json($book);
        }else{
            return response()->json([
                "message"=>"Book not found"
            ],400);
        }
    }
}
