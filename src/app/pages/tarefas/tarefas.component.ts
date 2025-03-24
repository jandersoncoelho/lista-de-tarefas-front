import { Component, signal } from '@angular/core';
import { TarefaService, Tarefa } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent {

  tarefas = signal<Tarefa[]>([]);
  tarefaEditando: number | null = null;
  tarefaEditandoDescricao: string = '';

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(data => this.tarefas.set(data));
  }
  
  editarTarefa(tarefa: Tarefa) {
    this.tarefaEditando = tarefa.id;
    this.tarefaEditandoDescricao = tarefa.descricao;
  }

  salvarEdicao(tarefa: Tarefa) {
    tarefa.descricao = this.tarefaEditandoDescricao;
    this.tarefaService.atualizarTarefa(tarefa).subscribe(() => {
      this.tarefaEditando = null;
      this.carregarTarefas();
    });
  }

  cancelarEdicao() {
    this.tarefaEditando = null;
  }

  atualizarTarefa(tarefa: Tarefa) {
    this.tarefaService.atualizarTarefa(tarefa).subscribe();
  }

  deletarTarefa(id: number) {
    this.tarefaService.deletarTarefa(id).subscribe(() => this.carregarTarefas());
  }
}
