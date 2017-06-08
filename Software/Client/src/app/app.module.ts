import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import { routing } from "./app.routing";
import {SelectModule} from 'ng2-select';
import { AlertModule } from 'ngx-bootstrap/alert';
import {Bus} from '../models/bus.model'
import {Movie} from 'models/movie.model'

import {AppComponent} from './app.component';
import {AppService} from 'app/app.service'
import { MoviesearchComponent } from './search/moviesearch/moviesearch.component';
import { BussearchComponent } from './search/bussearch/bussearch.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MovielistComponent } from './movielist/movielist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostticketComponent } from './postticket/postticket.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BusdetailComponent } from './busdetail/busdetail.component';
import { BuslistComponent } from './buslist/buslist.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesearchComponent,
    BussearchComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AutocompleteComponent,
    MovielistComponent,
    LoginComponent,
    RegisterComponent,
    PostticketComponent,
    MoviedetailComponent,
    BusdetailComponent,
    BuslistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    SelectModule,
    AlertModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers:[AppService]
})
export class AppModule { }
