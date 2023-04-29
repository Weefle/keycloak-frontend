import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppGuard } from '@core/guards/app.guard';
import { MovieDetailComponent } from '@app/movie/movie-detail/movie-detail.component';
import { MovieListComponent } from '@app/movie/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies/:id', component: MovieDetailComponent,
    canActivate: [AppGuard],
    data: { requiredRoles: ['admin', 'user'] }
  },
  {
    path: 'list', component: MovieListComponent,
    canActivate: [AppGuard],
    data: { requiredRoles: ['admin', 'user'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
