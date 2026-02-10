import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Servicios } from "../../shared/servicios/servicios";
import { Nosotros } from "../../shared/nosotros/nosotros";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Nosotros],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
