<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description_short', 255);
            $table->string('description_long');
            $table->decimal('price', 8, 2);
            $table->integer('quantity');
            $table->integer('brand_id');
            $table->json('category_ids');
            $table->json('image_urls');
            $table->string('ean');
            $table->json('tags')->nullable();
            $table->integer('warranty');
            $table->boolean('active');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('product');
    }
};
