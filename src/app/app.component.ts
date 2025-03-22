import { Component } from '@angular/core';
import { TarefasComponent } from "./pages/tarefas/tarefas.component";

@Component({
  selector: 'app-root',
  imports: [TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lista-de-tarefas-front';
}
