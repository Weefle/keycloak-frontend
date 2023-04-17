import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailedMovie } from '@core/models/detailed_movie';
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: DetailedMovie = {} as DetailedMovie;
  genreNames?: string[];
  productionCountries?: string[];
  spokenLanguages?: string[];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovie(id).subscribe((movie: DetailedMovie) => {
      this.movie = movie;
      this.genreNames = this.movie.genres.map(genre => genre.name);
      this.productionCountries = this.movie.production_countries.map(country => country.name);
      this.spokenLanguages = this.movie.spoken_languages.map(lang => lang.name);
    });
  }

}
