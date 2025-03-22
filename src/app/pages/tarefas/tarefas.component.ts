// import { Component, signal } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialog } from '@angular/material/dialog';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TarefaService, Tarefa } from '../../services/tarefa.service';

// @Component({
//   selector: 'app-tarefas',
//   standalone: true,
//   imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, FormsModule],
//   templateUrl: './tarefas.component.html',
//   styleUrl: './tarefas.component.scss'
// })
// export class TarefasComponent {
//   tarefas = signal<Tarefa[]>([]);

//   constructor(private tarefaService: TarefaService) {}

//   ngOnInit() {
//     this.carregarTarefas();
//   }

//   carregarTarefas() {
//     this.tarefaService.getTarefas().subscribe(data => this.tarefas.set(data));
//   }

//   deletarTarefa(id: number) {
//     this.tarefaService.deletarTarefa(id).subscribe(() => this.carregarTarefas());
//   }
// }

import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaService, Tarefa } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent {
editarTarefa(_t39: any) {
throw new Error('Method not implemented.');
}
adicionarTarefa() {
throw new Error('Method not implemented.');
}
  tarefas = signal<Tarefa[]>([]);

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(data => this.tarefas.set(data));
  }

  deletarTarefa(id: number) {
    this.tarefaService.deletarTarefa(id).subscribe(() => this.carregarTarefas());
  }

  atualizarTarefa(tarefa: Tarefa) {
    this.tarefaService.atualizarTarefa(tarefa).subscribe(() => this.carregarTarefas());
  }
}
