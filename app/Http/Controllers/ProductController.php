<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{

    private $productSchema = [
        'tags' => ['array'],
        'name' => ['required ','string'],
        'description_short' => ['required','string'],
        'description_long' =>[ 'required','string'],
        'price' => ['required','numeric','max:999999.99','min:0.00'],
        'quantity' => ['required','integer'],
        'brand_id' => ['required','integer'],
        'category_ids' => ['required','array'],
        'image_urls' => ['required','array'],
        'ean' => ['required', 'string'],
        'warranty' => ['required','integer', 'max:255'],
        'active' => ['required','boolean'],
    ];

    //
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::all()
        ]);
    }

    public function add(Request $request)
    {
        if($request->method('post')){
            $productId = $request->input('product_id');
            $product = Product::find($productId);
            return Inertia::render('Products/Add', [
                'product' => $product,
                'categories' => Category::all(),
            ]);
        }

        $categories = Category::all();

        return Inertia::render('Products/Add', [
            'categories' => $categories,
        ]);
    }

    public function edit (Request $request)
    {
        $request->validate(['product_id' => 'required|integer'])['product_id'];
        $productId = $request->input('product_id');
        $product = Product::find($productId);
        if ($product) {
            $product->update($request->validate($this->productSchema));
            return redirect()->route('products.index')->with('success', 'Product updated.');
        }
    }

    public function create(Request $request)
    {
        Product::create($request->validate($this->productSchema));
        return redirect()->route('products.add')->with('success', 'Product added.');
    }


    
}
