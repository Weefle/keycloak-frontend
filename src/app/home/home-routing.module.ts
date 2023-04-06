import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooGuard } from '@core/guards/foo.guard';
import { HerodetailComponent } from '@app/hero/herodetail/herodetail.component';
import { MovieDetailComponent } from '@app/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:name', component: HerodetailComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin', 'user'] }
  },
  {
    path: 'movies/:id', component: MovieDetailComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin', 'user'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
