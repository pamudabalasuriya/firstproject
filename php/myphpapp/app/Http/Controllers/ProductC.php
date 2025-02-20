<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductC extends Controller

{
    public function index() {
        $products = Product::latest()->paginate(5);
        //return response() -> jason($products);
        return view('products.index',compact('products'))->with(request()->input('page'));
        }

    public function create(){
        return view('products.create');
        }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'details' => 'required' 
        ]);

        Product::create($request->all());

        return redirect()->route('products.index')->with('success','Product added successfully');
    }

    public function edit($id)
    {
        $products = Product::findOrFail($id); // Find the product by ID or fail
        return view('products.edit', compact('products')); // Pass product to the edit view
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'details' => 'required',
        ]);

        $products = Product::findOrFail($id);
        $products->update($request->all());

        return redirect()->route('products.index')->with('success', 'Product updated successfully');
    }

}