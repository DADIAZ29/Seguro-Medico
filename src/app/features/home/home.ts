import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Servicios } from "../../shared/planes/planes";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
