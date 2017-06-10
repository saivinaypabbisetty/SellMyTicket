import {Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params,RouterState}from'@angular/router';
import{Http} from '@angular/http';
import{AppService}from'../app.service';
import{User} from '../../models/user.model';
import{Movie} from '../../models/movie.model';
import{Bus} from '../../models/bus.model';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
loggedUser:User;
loggedUserMovies:Movie[]=[];
loggedUserBuses:Bus[]=[];
movielist:Movie[];
buslist:Bus[];
blist:Bus[];
mlist:Movie[];
tempmovie:Movie
tempbus:Bus;
currentUser:User=this._appservice.currentUser;
constructor(private _appservice:AppService,private http:Http,private router:Router,private route:ActivatedRoute)
  { }

  ngOnInit() {
     if(this.currentUser.userId=="null")
    {
      this.router.navigate(['/home']);
    }
    this._appservice.getmovies().subscribe(mlist=>{ this.mlist=mlist;
                                                    this.getMovieJsonData();
    })
    this._appservice.getbuses().subscribe(blist=>{
                                                    this.blist=blist;
                                                    this.getBusJsonData();
   
    })                                                
  }
  getMovieJsonData(){
    this.movielist=this.mlist
    for (let movie of this.movielist)
    {
      if(movie.PostedBy==this.currentUser.userName)
      {
        this.loggedUserMovies.push(movie);
      }

    }
  }
  getBusJsonData(){
 this.buslist = this.blist;
  for (let bus of this.buslist)
    {
       this.tempbus=bus;
      if(bus.PostedBy==this.currentUser.userName)
      {
        this.loggedUserBuses.push(bus);
      }

    }
  }

toMovieDetail(movie:Movie)
    {
      this.router.navigate(['/home',movie.name]); //THIS IS ABSOLUTE NAVIGATION
    }

toBusDetail(bus:Bus)
 {
  this.router.navigate(['/home',bus.from,bus.to]);  //THIS IS ABSOLUTE NAVIGATION
 }

}

  