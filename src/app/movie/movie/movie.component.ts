import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "@core/models/movie";
import {Router} from "@angular/router";
import {MovieService} from "@core/services/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieService) { }

  @Input()
  movie?: Movie;

  ngOnInit(): void {

  }

  addMovieToFavorites(movie: Movie) {
    this.movieService.createMovie(movie).subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

  goToDetail(movie: Movie) {
    this.router.navigate(['/home/movies', movie.id]);
  }

}
