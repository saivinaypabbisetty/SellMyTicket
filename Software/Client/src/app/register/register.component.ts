import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    register: FormGroup;
    constructor() { }
    
    ngOnInit() 
     {
        this.register = new FormGroup({
            r_name: new FormControl(),
            r_email: new FormControl(),
            r_password: new FormControl(),
            r_matchpassword: new FormControl()
                                     });
      }
onRegister(){
    console.log(this.register.value);
    this.register.reset();
 }
}