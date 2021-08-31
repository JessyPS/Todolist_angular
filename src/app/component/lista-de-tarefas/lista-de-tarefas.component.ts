import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
 
 
  tarefas: Tarefa[]= [
    {
      texto:"Preciso estudar mais ",
      feito: true,
      prioridade: Prioridade.Alta
    },
    {
      texto:"Lavar a roupa antes que chova",
      feito: false,
      prioridade: Prioridade.Media
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}
