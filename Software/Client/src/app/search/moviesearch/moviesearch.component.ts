import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params}from'@angular/router'
import{FormGroup,FormBuilder,NgForm} from '@angular/forms'
import {Movie} from '../../../models/movie.model';
import {AppService} from 'app/app.service'
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AutocompleteComponent } from 'app/autocomplete/autocomplete.component';
@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css'],
  providers:[AppService]
})
export class MoviesearchComponent implements OnInit {
  dateform:FormGroup;
  selectedMovie:Movie;
  toShow:Boolean=false;
  MovieName:string;
  list:Movie[];
  temp:string[]=["start"]
  names:string[];
  movielist:Movie[];
  ticketsNotAvailable:boolean;
   private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute,private _formBuilder:FormBuilder)
  {

  }

  ngOnInit()
  {
    this.dateform=this._formBuilder.group({
      traveldate:[]
    })
    this ._appservice.getmovies().subscribe(movielist=>{
      this.movielist=movielist;
      this.getJsonData();
    })
  }
  getJsonData()
{
  this.list = this.movielist;
  for(let movie of this.list)
  {
    this.temp.push(movie.name);
   }
 this.temp.splice(0,1);
 this.names=this.temp;

}
  
toMovieDetail(movie:Movie)
 {
      console.log(movie.name +" movie clicked");
      this.router.navigate(['/home',movie.name]);  //THIS IS ABSOLUTE NAVIGATION
 }

  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
     this.MovieName=value.text;
    console.log('Selected value is: ', value);
    for(let movie of this.list)
    {
    if(movie.name==value.text)
    {      
      this.toShow=true;  
      this.selectedMovie=movie;
      console.log(this.selectedMovie);
    }
    }
  }
 
  public removed(value:any):void {
     this.toShow=false;
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }

 onSearch(form:NgForm)
 {
   for(let movie of this.list)
    {
    if(this.MovieName==movie.name&&form.value.traveldate==movie.date)
    { 
      this.toShow=true;     
      this.ticketsNotAvailable=false;
      this.selectedMovie=movie;
      console.log(this.selectedMovie);
    }
  }
   for(let movie of this.list)
    {
    if(this.MovieName==movie.name&&form.value.traveldate!==movie.date)
    { 
      this.ticketsNotAvailable=true;
      this.toShow=false;     
    }
    }
 }
   
}

