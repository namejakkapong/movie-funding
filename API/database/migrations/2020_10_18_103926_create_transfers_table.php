<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('package_id');
            $table->unsignedBigInteger('bank_id');
            $table->string('transfer_amount');
            $table->date('transfer_date');
            $table->string('transfer_pic')->nullable();
            $table->string('transfer_note');
            $table->timestamps();
            $table->foreign('user_id')
            ->references('id')->on('users');
            $table->foreign('package_id')
            ->references('id')->on('packages');
            $table->foreign('bank_id')
            ->references('id')->on('banks');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transfers');
    }
}
