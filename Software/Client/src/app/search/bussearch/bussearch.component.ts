import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params}from'@angular/router'
import {Bus}   from '../../../models/bus.model';
import{FormGroup,FormBuilder,NgForm} from '@angular/forms'
import {AppService} from 'app/app.service'
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AutocompleteComponent } from 'app/autocomplete/autocomplete.component';
@Component({
  selector: 'app-bussearch',
  templateUrl: './bussearch.component.html',
  styleUrls: ['./bussearch.component.css']
})
export class BussearchComponent implements OnInit {
dateform:FormGroup;
toShow:boolean=false;
BusesAvailable:boolean;
fromName:string;
toName:string;
selectedBus:Bus;
buslist:Bus[];
list:Bus[];
tempfrom:string[]=["start"];
tempto:string[]=["start"];
fromNames:string[];
toNames:string[];
private fromvalue:any = {};
private _disabledVfrom:string = '0';
private disabledfrom:boolean = false;
private tovalue:any = {};
private _disabledVto:string = '0';
private disabledto:boolean = false;
constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute,private _formBuilder:FormBuilder){

}
  
  ngOnInit() 
  {
    this.dateform=this._formBuilder.group({
      traveldate:[]
    })
this ._appservice.getbuses().subscribe(buslist=>{
      this.buslist=buslist;
      this.getJsonData();
    })
  }
  getJsonData()
{
 this.list = this.buslist;
  for(let bus of this.list)
  {
    this.tempfrom.push(bus.from);
    this.tempto.push(bus.to)
  }
 this.tempfrom.splice(0,1);
 this.tempto.splice(0,1);

 this.fromNames=this.tempfrom;
 this.toNames=this.tempto;

 
} 
toBusDetail(bus:Bus)
 {
      console.log(bus.from+","+bus.to +" bus clicked");
      this.router.navigate(['/home',bus.from,bus.to]);  //THIS IS ABSOLUTE NAVIGATION
 }

  private get disabledVfrom():string {
    return this._disabledVfrom;
  }
 
  private set disabledVfrom(fromvalue:string) {
    this._disabledVfrom = fromvalue;
    this.disabledfrom = this._disabledVfrom === '1';
  }
 
  public selectedfrom(fromvalue:any):void {
     this.fromName=fromvalue.text;
     this.toShow=false;
    console.log('Selected from value is: ', fromvalue);
    for(let bus of this.list)
    {
    if(this.fromName==bus.from&&this.toName==bus.to)
     {  
       this.selectedBus=bus;       
     }
    }  
}
 
  public removedfrom(fromvalue:any):void {
     this.toShow=false;
    console.log('Removed from value is: ', fromvalue);
  }
 
  public typedfrom(fromvalue:any):void {
    console.log('New to search input: ', fromvalue);
  }
 
  public refreshValuefrom(fromvalue:any):void {
    this.fromvalue = fromvalue;
  }

  private get disabledVto():string {
    return this._disabledVto;
  }

  private set disabledVto(tovalue:string) {
    this._disabledVto = tovalue;
    this.disabledto = this._disabledVto === '1';
  }

  public selectedto(tovalue:any):void {
    this.toShow=false;
    this.toName=tovalue.text;
    console.log('Selected to value is: ', tovalue);
    for(let bus of this.list)
    {
    if(this.fromName==bus.from&&this.toName==bus.to)
    {  
      this.toShow=true;
      this.selectedBus=bus;
    }
    }
  }

  public removedto(tovalue:any):void {
    this.toShow=false;
    console.log('Removed to value is: ', tovalue);
  }

  public typedto(tovalue:any):void {
    
    console.log('New to search input: ', tovalue);
  }

  public refreshValueto(tovalue:any):void 
  {
    this.tovalue = tovalue;
  }
 
  onSearch(form:NgForm)
 {
   for(let bus of this.list)
   {
    if(this.fromName==bus.from&&this.toName==bus.to&&form.value.traveldate==bus.date)
    {  
       this.BusesAvailable=false;
       this.toShow=true;
       this.selectedBus=bus;
       console.log("selected bus is ",this.selectedBus);

    }
   }
     if(form.value.traveldate!==this.selectedBus.date)    
     {  
       this.BusesAvailable=true;       
       this.toShow=false;
     }
  } 
  

 } 
