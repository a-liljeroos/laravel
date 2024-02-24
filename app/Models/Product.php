<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected  $table = 'product';
    protected  $primaryKey = 'id';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected  $fillable = [
        'tags',
        'name',
        'description_short',
        'description_long',
        'price',
        'quantity',
        'brand_id',
        'category_ids',
        'image_urls',
        'ean',
        'warranty',
        'active',
    ];
}
