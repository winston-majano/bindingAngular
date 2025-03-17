import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostrarMensajeComponent, ReplicadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event Binding en Angular 19';
}
