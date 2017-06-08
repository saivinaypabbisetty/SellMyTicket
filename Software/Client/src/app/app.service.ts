import {Movie} from '../models/movie.model';
import {Bus} from '../models/bus.model';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';
import {User} from '../models/user.model';
import { Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/add/operator/catch';
import'rxjs/add/observable/throw';

@Injectable()
export class AppService
{
 currentUser:User={"userId":"null","password":"null","userName":""};
 isLoggedin:boolean=this.CheckUser();
 redirectUrl:string;
 url:string;

 public addedMovies:Movie[]=[{
"name":"Spyder",
"PostedBy":"Vinay",
"date":"04-08-2017",
"venue":"Pvr Forum Sujana Mall",
"ShowTime":"10:35",
"tickets":4,
"cost":1000,
"phone":"8499924398",
}];
public addedBuses:Bus[]=[{
   
  "from":"Mumbai",
  "date":"2017-06-08",
  "to":"Pune",
  "DepTime":"11:15",
  "ReachBy":"13:15",
  "tickets":2,
  "cost":1500,
  "PostedBy":"Mahesh",
  "phone":"9866562643",
}];
constructor(private _http:Http){


 }

getmovies = ():any =>{
    
  return this._http.get('assets/movies.json') .map(res => res.json())
  .catch((error:Response)=>{
                             console.log(error)
                             return Observable.throw(error||"Server error")});                                                  
}
getMovie=()=>
{
   return this.addedMovies;
}

setMovie=(movies:Movie[])=>
{
    this.addedMovies = movies;
}
getBus=()=>
{
   return this.addedBuses;
}

setBus=(buses:Bus[])=>
{
    this.addedBuses = buses;
}

getbuses= ():any =>{
    
  return this._http.get('assets/bus.json') .map(res => res.json())
  .catch((error:Response)=>{
                             console.log(error)
                             return Observable.throw(error||"Server error")});                                                    
}
getusers=():any=>{
    
  return this._http.get('assets/users.json') .map(res => res.json())
  .catch((error:Response)=>{
                             console.log(error)
                             return Observable.throw(error||"Server error")});                                                    

}
CheckUser()
{
  if(this.currentUser.userId!=="null")
  {
  return true;
}
}
}

/*postmovies=():any=>{                          //I tried to push data into json but I failed doing it.
  var json=JSON.stringify({
name:"Ramayanam",
ShowTime:{
  hours:20,
  minutes:50
          },
tickets:4,
cost:1000,
PostedBy:"Srikanth",
contact:{
        phone:9666636623,
        email:"likhith@gmail.com"
        }
});
var params= 'json=' + json;
var headers=new Headers();
headers.append('Content-Type','application/json');
return this._http.post('assets/jsons/movies.json/?',params,{headers:headers}).map(res => res.json());
}*/