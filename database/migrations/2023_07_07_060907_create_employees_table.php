<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id('id');
            $table->string('name',50);
            $table->string('email',50);
            $table->string('phone', 12);
            $table->string('address',100);
            $table->decimal('salary', 10, 2);
            $table->string('photo')->nullable();
            $table->string('nid')->nullable();
            $table->string('joining_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
