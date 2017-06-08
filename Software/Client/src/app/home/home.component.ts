import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import{Movie}from '../../models/movie.model'
import {LoginComponent} from '../login/login.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import{MoviesearchComponent} from '../search/moviesearch/moviesearch.component';
import{BussearchComponent} from '../search/bussearch/bussearch.component';
import {MovielistComponent} from '../movielist/movielist.component';
import {BuslistComponent} from '../buslist/buslist.component';
import {AppService} from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list:Movie[];
  showMoviesearch:boolean=true;
  showBussearch:boolean=false;
  t:boolean=true;
  f:boolean=true;

  showBus
  movielist:Movie[];
  postData:string;
  constructor(private _appservice:AppService,_http:Http)
  {

  }
  showbussearch (){
    this.showMoviesearch=false;
    this.showBussearch=true;
}
  showmoviesearch()
  {
    this.showMoviesearch=true;
    this.showBussearch=false;
  }
  ngOnInit()
  {
   
  }

}