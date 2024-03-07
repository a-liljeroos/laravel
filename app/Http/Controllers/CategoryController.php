<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends ProductController
{
    
    public function index()
    {
        return Inertia::render('Products/Categories', [
            'categories' => Category::all(),
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'string|nullable',
        ]);

        Category::create($request->all());

        return redirect()->route('categories.index');
    }

}
