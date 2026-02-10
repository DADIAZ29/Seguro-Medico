import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./shared/nav/nav";
import { Hero } from "./shared/hero/hero";
import { Home } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Hero, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('seguro_medico');
}
