import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/models/video-content.interface';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  
  movieService = inject(MovieService);

  popularMovies: IVideoContent[] = [];
  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe(res=>{
      console.log(res);
      this.popularMovies = res.reults;
    })
  }
}
