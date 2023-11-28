<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recomendacao;

class VersionamentoController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required',
        ]);

        $recomendacao = Recomendacao::create($validatedData);

        return response()->json(['message' => 'Recomendação criada com sucesso!', 'data' => $recomendacao], 201);
    }
}
