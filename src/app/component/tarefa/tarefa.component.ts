import { Component, Input, OnInit } from '@angular/core';
import * as uniqid from 'uniqid'
import { Tarefa } from 'src/app/models/Tarefa'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  // id: string;
  @Input() lista!:Tarefa;

  constructor() {
    // this.id = uniqid();
   }

  ngOnInit(): void {
  }


}
