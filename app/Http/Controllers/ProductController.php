<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::all(),
        ]);
    }

    public function add()
    {
        return Inertia::render('Products/Add');
    }

    public function create(Request $request)
    {
        Product::create($request->validate([
            'tags' => ['json'],
            'name' => ['required ','string'],
            'description_short' => ['required','string'],
            'description_long' =>[ 'required','string'],
            'price' => ['required','numeric','max:999999.99','min:0.00'],
            'quantity' => ['required','integer'],
            'brand_id' => ['required','integer'],
            'category_ids' => ['required','json'],
            'image_urls' => ['required','json'],
            'ean' => ['required', 'string'],
            'warranty' => ['required','integer', 'max:255'],
            'active' => ['required','boolean'],
        ]));

        return redirect()->route('products.add')->with('success', 'Product added.');
    }


    
}
