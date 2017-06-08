import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params}from'@angular/router'
import{Http} from '@angular/http';
import{Movie} from '../../models/movie.model'
import{Bus} from '../../models/bus.model'
import{AppService} from '../app.service'
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  list:Movie[];
  mlist:Movie[];
  movielist:Movie[]= this._appservice.getMovie();

 
  lst:number[];
  bst:number[];
  constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute)
  {
  }

  ngOnInit()
  {
     
 this ._appservice.getmovies().subscribe(mlist=>{ this.mlist=mlist;
                                                    this.getJsonData(); } )


}
getJsonData()
{
  this.list=this.mlist
}
toMovieDetail(movie:Movie)
    {
      this.router.navigate(['/home',movie.name]); //THIS IS ABSOLUTE NAVIGATION
    }
fromRecentposttoMovieDetail(recentMovie:Movie)
{
   this.router.navigate(['/home',recentMovie.name]);
}

}
