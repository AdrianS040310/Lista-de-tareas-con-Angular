import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'JASS-app-tareas-jass',
  templateUrl: './tareas-jass.component.html',
  styleUrls: ['./tareas-jass.component.css']
})
export class TareasJassComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    //console.log(this.nombreTarea);
    //Crear el objeto Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //Agregar el objeto tarea al array = listTareas
    this.listTareas.push(tarea);

    //Resetear form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    //console.log('A borrar:' + index);
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea): void {
    this.listTareas[index].estado = !tarea.estado;
  }
}