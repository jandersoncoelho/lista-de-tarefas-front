import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TarefasComponent } from './app/pages/tarefas/tarefas.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Route[] = [
  { path: '', component: TarefasComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
}).catch(err => console.error(err));
