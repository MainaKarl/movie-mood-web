import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',

})
export class MovieCarouselComponent {

  constructor () {}

  ngOnInit(){

  }

}
