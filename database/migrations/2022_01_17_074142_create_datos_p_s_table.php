<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatosPSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /* Cración de la BD */
        Schema::create('datos_p_s', function (Blueprint $table) {
            /* Creación de los campos */
            $table->id();
            $table->string('nombre');
            $table->string('posicion');
            $table->decimal('salario',10,2); /* Máximo de 10 caracteres y 2 decimales */
          
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
        Schema::dropIfExists('datos_p_s');
    }
}
