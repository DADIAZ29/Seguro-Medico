import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./shared/nav/nav";
import { Nosotros } from "./shared/nosotros/nosotros";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Nosotros],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class App {
  protected readonly title = signal('seguro_medico');
}