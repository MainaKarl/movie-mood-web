import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

const options = {
    params:{
        include_adult: 'false',
        include_video: 'true',
        language: 'en-US',
        pages: '1',
        sort_by: 'popularity.desc'
    },
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzAzYzRmMzQ5Y2Q5YTUzYjI0YzdkNmY2ZGFhZWQ2OSIsInN1YiI6IjY1YjRkMmEzZjY1OTZmMDE2M2ZlMTg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hPWBScqbIshW3UzEKPdVW5bJy881PcEn-1Y3fJaz0No'
    }
}
@Injectable({
    providedIn: 'root'
})
export class MovieService{

    http = inject(HttpClient);

    getMovies(){
        return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
    }
}
