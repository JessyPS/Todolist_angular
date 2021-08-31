import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeTarefasComponent } from './component/lista-de-tarefas/lista-de-tarefas.component';
import { TarefaComponent } from './component/tarefa/tarefa.component';
import { InputComponent } from './component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeTarefasComponent,
    TarefaComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
