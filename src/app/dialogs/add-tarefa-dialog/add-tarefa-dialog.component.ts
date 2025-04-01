import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-tarefa-dialog', // Define o seletor do componente
  standalone: true, // Indica que este componente pode ser usado independentemente
  imports: [CommonModule, FormsModule, MatButtonModule], // Importa módulos necessários
  templateUrl: './add-tarefa-dialog.component.html',
  styleUrl: './add-tarefa-dialog.component.scss'
})
export class AddTarefaDialogComponent {
  descricao: string = ''; // Variável para armazenar a descrição da nova tarefa

  constructor(
    public dialogRef: MatDialogRef<AddTarefaDialogComponent>, // Referência ao diálogo para controle
    @Inject(MAT_DIALOG_DATA) public data: any // Injeta dados opcionais no diálogo
  ) {}

  adicionar() {
    if (this.descricao.trim()) { // Verifica se a descrição não está vazia ou só com espaços
      this.dialogRef.close(this.descricao); // Fecha o diálogo e retorna a descrição da tarefa
    }
  }

  cancelar() {
    this.dialogRef.close(); // Fecha o diálogo sem adicionar uma nova tarefa
  }
}
