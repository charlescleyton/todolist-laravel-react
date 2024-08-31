<?php

namespace Tests\Feature;

use App\Models\Tarefa;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TarefaApiTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function todas_as_tarefas()
    {
      // Crie 5 tarefas fictícias no banco de dados
    Tarefa::factory()->count(5)->create();

    $response = $this->getJson('/api/tarefas');

    // Verifique a resposta
    $response->assertStatus(200)
        ->assertJsonStructure([
            'tarefas' => [
                '*' => [
                    'id',
                    'titulo',
                    'descricao',
                ],
            ],
        ]);
    }


    /** @test */
    public function criar_nova_tarefa()
    {
        // Simula a crição de tarefa
        $tarefaData = [
            'titulo' => 'Minha nova tarefa',
            'descricao' => 'Esta é uma tarefa de teste',
        ];

        $response = $this->post('/api/tarefas', $tarefaData);

        // Verifique o retorno
        $response->assertStatus(201)
            ->assertJson([
                'mensagem' => 'Tarefa criada com sucesso',
            ]);
    }

    /** @test */
    public function mostrar_uma_tarefa_especifica()
    {
        // Crie tarefa fictícia no banco de dados
        $tarefa = Tarefa::factory()->create();

        $response = $this->getJson("/api/tarefas/{$tarefa->id}");

        // Verifique se os dados estão corretos
        $response->assertStatus(200)
            ->assertJson([
                'id' => $tarefa->id,
                'titulo' => $tarefa->titulo,
                'descricao' => $tarefa->descricao,
            ]);
    }

    /** @test */
    public function Atualizar_uma_tarefa_especifica()
    {
       // Crie tarefa fictícia no banco de dados
        $tarefa = Tarefa::factory()->create();

        // Simulados atualização da tarefa
        $updatedData = [
            'titulo' => 'Tarefa atualizada',
            'descricao' => 'Descrição atualizada',
        ];

        $response = $this->put("/api/tarefas/{$tarefa->id}", $updatedData);

        // Verifique o retorno
        $response->assertStatus(200)
            ->assertJson([
                'mensagem' => "Tarefa {$tarefa->id} atualizada com sucesso",
            ]);
    }

    /** @test */
    public function deletar_uma_tarefa_especifica()
    {
        // Crie tarefa fictícia no banco de dados
        $tarefa = Tarefa::factory()->create();

        $response = $this->delete("/api/tarefas/{$tarefa->id}");

        // Verifique se a resposta contém a mensagem esperada
        $response->assertStatus(200)
            ->assertJson([
                'mensagem' => "Tarefa {$tarefa->id} deletada com sucesso",
            ]);
    }
}
