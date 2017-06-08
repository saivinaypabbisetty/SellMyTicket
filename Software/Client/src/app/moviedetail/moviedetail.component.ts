import{Component,OnInit} from '@angular/core';
import{Http} from '@angular/http';
import{ActivatedRoute,Router,Params} from '@angular/router'
import{Movie} from '../../models/movie.model'
import{AppService} from '../app.service'
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  moviename:string;
  list:Movie[];
  mlist:Movie[];
  movielist:Movie[]= this._appservice.getMovie();
  tempmovie:Movie;  
  selectedmovie:Movie;
  selectedRecentmovie:Movie;
  checkRecent:boolean=false;

  constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute) {
   
   }

  ngOnInit() 
  {   
      // let name=this.route.snapshot.params['name'];
      // this.moviename=name;
      this.route.params.subscribe((params:Params)=>{
      let mname=params['name'];
      this.moviename=mname;
      })
      this._appservice.getmovies().subscribe(list =>{this.list=list;
                                                    this.getJsonData();
                                                     } );                                               
  }

                                          
    
  
  getJsonData()
{
  this.mlist=this.list;
  for(let movie of  this.mlist)
       {
          if(this.moviename==movie.name)
          {
          this.selectedmovie=movie;
          break
          }
       }
          
  for(let recentMovie of this.movielist)
       {
          if(this.moviename==recentMovie.name)
          {
          this.selectedmovie=recentMovie;
          break;
          }
       }
}
   toLogin()
   {
    //  this._appservice.redirectUrl=this._appservice.geturl();
   }
}


