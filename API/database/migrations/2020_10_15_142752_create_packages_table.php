<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('movie_id');
            $table->enum('type_package',['funds','invest'])->default('funds');
            $table->string('topic');
            $table->longtext('details');
            $table->longtext('reward');
            $table->decimal('amount', 9,2);
            $table->string('percent');
            $table->timestamps();
            $table->foreign('movie_id')
            ->references('id')->on('movies')
            ->onDelete('cascade');
            $table->softDeletes();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}
