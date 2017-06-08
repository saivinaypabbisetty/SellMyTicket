import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params}from'@angular/router'
import{Http} from '@angular/http';
import{AppService}from'../app.service'
import{User} from '../../models/user.model'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userlist:User[];
list:User[];
currentUser:User=this._appservice.currentUser;
checkuser:string;
temp:User
  constructor(private _appservice:AppService,private http:Http,private router:Router) {
    
   }

  ngOnInit() {
this ._appservice.getusers().subscribe(userlist=>{
      this.list=userlist;
      this.getJsonData();
    })
  }

getJsonData()
{
  this.userlist=this.list
}
CheckUser()
{
for(let user of this.userlist)
{
if(this.currentUser.userId==user.userId&&this.currentUser.password==user.password)
{
  this.router.navigate(['/postticket']);
}
else{
  this.router.navigate(['/login']);
}
}
}
logout()
{
  this.currentUser=this._appservice.currentUser;
}
}
