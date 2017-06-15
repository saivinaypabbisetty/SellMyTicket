import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params,RouterState}from'@angular/router'
import{Http} from '@angular/http';
import{AppService}from'../app.service'
import{User} from '../../models/user.model'
import { FormGroup, FormControl, Validators,FormBuilder,NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
url:string;
loginform:FormGroup;
userlist:User[];
list:User[];
LoginIncorrect:boolean;
LoginEmpty:boolean;
currentUser:User=this._appservice.currentUser;
constructor(private _appservice:AppService,private http:Http,private router:Router,private _formBuilder:FormBuilder,private route:ActivatedRoute)
{ }

  ngOnInit() {
    
    this ._appservice.getusers().subscribe(userlist=>{
      this.list=userlist;
      this.getJsonData();
    })
  this.loginform=this._formBuilder.group({
l_name:[],
l_email:[] ,
l_password:[]
})
  }
  getJsonData(){
    this.userlist=this.list;
  }
 onSubmit(form:NgForm){
   if(form.value.l_email==""&&form.value.l_password=="")
   {
     this.LoginIncorrect=false;     
     this.LoginEmpty=true;
   }

   for(let user of this.userlist)
    {
     if(form.value.l_email==user.userId&&form.value.l_password==user.password)
       {
             this.LoginIncorrect=false;
             this.currentUser.userName=user.userName;
             this.currentUser.userId=user.userId;
             this.currentUser.password=user.password;
             this.currentUser=user;  
             this.router.navigate(['/postticket']);

       }
    
    }
     for(let user of this.userlist)
    {
     if(form.value.l_email!==user.userId&&form.value.l_password!==user.password)
       {
             this.LoginIncorrect=true;
             this.LoginEmpty=false;
             if((form.value.l_email==""||form.value.l_email==null)&&(form.value.l_password==""||form.value.l_password==null))
             {
                 this.LoginIncorrect=false;     
                 this.LoginEmpty=true;
             }  
             break;
        }
    }
    // if(this._appservice.isLoggedin)
    // {
    //   this.url=this._appservice.redirectUrl
    //   this.router.navigate([this.url]);
    // }
    
    form.resetForm();
 }
}
