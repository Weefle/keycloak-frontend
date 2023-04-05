import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooGuard } from '@core/guards/foo.guard';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin', 'user'] }
  },
  {
    path: 'detail/:id', component: DetailComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin', 'user'] }
  },
  {
    path: 'update/:id', component: UpdateComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin'] }
  },
  {
    path: 'create', component: CreateComponent,
    canActivate: [FooGuard],
    data: { requiredRoles: ['admin'] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooRoutingModule { }
