import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  
  movieService = inject(MovieService);

  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe(res=>{
      console.log(res);
    })
  }
}
