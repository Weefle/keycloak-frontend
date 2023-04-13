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
import { MovieListComponent } from './movie/movie-list/movie-list/movie-list.component';
import { MovieComponent } from './movie/movie/movie.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LayoutComponent,
        HerodetailComponent,
        MovieDetailComponent,
        MovieListComponent,
        MovieComponent
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
    exports: [
        MovieComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
