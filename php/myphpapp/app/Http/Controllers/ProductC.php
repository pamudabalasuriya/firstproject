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

    public function edit(Product $product)
    {
       // $products = Product::findOrFail($id); // Find the product by ID or fail
        return view('products.edit', compact('product')); // Pass product to the edit view
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'details' => 'required',
        ]);
        $product->update($request->all());

        return redirect()->route('products.index')->with('success', 'Product updated successfully');
    }

    public function destroy(Product $product)
    {
       $product->delete();
        return redirect()->route('products.index')->with('success', 'Product updated successfully');
    }

}