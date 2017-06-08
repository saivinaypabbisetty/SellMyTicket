import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params}from'@angular/router'
import {Bus}   from '../../models/bus.model';
import {AppService} from 'app/app.service'
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AutocompleteComponent } from 'app/autocomplete/autocomplete.component';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
recentBuslist:Bus[]=this._appservice.getBus();
buslist:Bus[];
list:Bus[];
constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute){}
  ngOnInit() 
  { 
    this ._appservice.getbuses().subscribe(buslist=>{
                                                    this.buslist=buslist;
                                                    this.getJsonData();
                                                    })
  }
  getJsonData()
{
 this.list = this.buslist;
}
toBusDetail(bus:Bus)
 {
  this.router.navigate(['/home',bus.from,bus.to]);  //THIS IS ABSOLUTE NAVIGATION
 }
}
 