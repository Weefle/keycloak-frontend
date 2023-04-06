import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { HerodetailComponent } from './hero/herodetail/herodetail.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { PaginationComponent } from './pagination/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LayoutComponent,
    HerodetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: environment.authResourceServerConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
