import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event Binding en Angular 19';
}
