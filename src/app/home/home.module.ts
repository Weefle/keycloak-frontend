import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '@app/pagination/pagination/pagination.component';
import {MovieComponent} from "@app/movie/movie/movie.component";
import {MovieListComponent} from "@app/movie/movie-list/movie-list.component";
import {MovieDetailComponent} from "@app/movie/movie-detail/movie-detail.component";

@NgModule({
  declarations: [
    HomeComponent,
    PaginationComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule]
})
export class HomeModule { }
