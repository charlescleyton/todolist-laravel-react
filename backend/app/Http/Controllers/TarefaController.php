<?php

namespace App\Http\Controllers;

use App\Models\Tarefa;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    public function index(Request $request)
    {

        if ($request->has('concluida')) {
            $tarefas = Tarefa::where('concluida', $request->concluida)->get();

            return response()->json([
                'tarefas' => $tarefas
            ], 200);
        }

        $tarefas = Tarefa::all();

        return response()->json([
            'tarefas' => $tarefas
        ], 200);
    }

    public function store(Request $request)
    {
        $tarefaData = Tarefa::create($request->all());

        return response()->json([
            'mensagem' => 'Tarefa criada com sucesso',
            'tarefa' => $tarefaData,
        ], 201);
    }

    public function show($id)
    {
        $tarefa = Tarefa::findOrFail($id);
        return response()->json($tarefa, 200);
    }

    public function update(Request $request, $id)
    {
        $tarefa = Tarefa::findOrFail($id);
        $tarefa->update($request->all());

        return response()->json([
            'mensagem' => "Tarefa $id atualizada com sucesso",
        ], 200);
    }

    public function destroy($id)
    {
        $tarefa = Tarefa::findOrFail($id);
        $tarefa->delete();

        return response()->json([
            'mensagem' => "Tarefa $id deletada com sucesso"
        ], 200);
    }
}
