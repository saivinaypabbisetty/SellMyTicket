import { Component, OnInit } from '@angular/core';
import{Movie} from '../../models/movie.model'
import{Bus} from '../../models/bus.model'
import{User} from '../../models/user.model'
import{FormGroup,FormBuilder,NgForm} from '@angular/forms'
import{AppService}from'../app.service'
import{Http}from'@angular/http'
@Component({
  selector: 'app-postticket',
  templateUrl: './postticket.component.html',
  styleUrls: ['./postticket.component.css']
})
export class PostticketComponent implements OnInit {
 postMovietickets:FormGroup;
 postBustickets:FormGroup;
 currentUser:User=this._appservice.currentUser;
 tst:number[];
 bst:number[];
 temparrnumbers:any;
 showMovieform:boolean=true;
 showBusform:boolean=false; 
  
constructor(private _appservice:AppService,_http:Http,private _formBuilder:FormBuilder)
  {
      
  }
  ngOnInit() 
  { 
    
    this.postMovietickets=this._formBuilder.group({
     movie_name:["sai"],
     PostedBy:["vinay"],
     date:[5-10-1997],
     venue:[],
     hours:[10],
     minutes:[50],
     movie_tickets:[5],
     cost:[500],
     movie_phone:["849595953"],

    })
    this.postBustickets=this._formBuilder.group({
      from:[],
      to:[],
      PostedBy:[],
      date:[],
      Dephours:[],
      Depminutes:[],
      ReachByhours:[],
      ReachByminutes:[],
      bus_tickets:[],
      cost:[],
      bus_phone:[] ,

    })  }
   onMovieSubmit(form: NgForm) 
   {
        const movie = new Movie(form.value.movie_name,form.value.PostedBy,form.value.date,form.value.venue,form.value.hours,form.value.minutes,form.value.movie_tickets,form.value.cost,form.value.movie_phone);
        let tempmovie = this._appservice.getMovie();
        tempmovie.push(movie);
        this._appservice.setMovie(tempmovie);
        console.log(this._appservice.addedMovies);
        form.resetForm();
         
   }
   onBusSubmit(form:NgForm)
   {
     const bus=new Bus(form.value.from,form.value.tos,form.value.date,form.value.Dephours,form.value.Depminutes,form.value.ReachByhours,form.value.ReachByminutes,form.value.bus_tickets,form.value.cost,form.value.PostedBy,form.value.bus_phone)
     let tempbus=this._appservice.getBus();
     tempbus.push(bus);
     this._appservice.setBus(tempbus);
     console.log(this._appservice.addedBuses);
     form.resetForm(); 
  }
  showbusform (){
    this.showMovieform=false;
    this.showBusform=true;

}
  showmovieform()
  {
    this.showMovieform=true;
    this.showBusform=false;
  }
}
