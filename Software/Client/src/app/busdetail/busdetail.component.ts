import{Component,OnInit} from '@angular/core';
import{Http} from '@angular/http';
import{ActivatedRoute,Router,Params} from '@angular/router'
import{Bus} from '../../models/bus.model'
import{AppService} from '../app.service'
@Component({
  selector: 'app-busdetail',
  templateUrl: './busdetail.component.html',
  styleUrls: ['./busdetail.component.css']
})
export class BusdetailComponent implements OnInit {
  from:string;
  to:string;
  list:Bus[];
  buslist:Bus[];
  recentBuslist:Bus[]=this._appservice.getBus();
  // movielist:Movie[]= this._appservice.getMovie();
  tempbus:Bus;  
  selectedBus:Bus;
  // selectedRecentmovie:Movie;
  checkRecent:boolean=false;
  constructor(private _appservice:AppService,private _http:Http,private router:Router,private route:ActivatedRoute) {}
 ngOnInit() 
  {   
      // let name=this.route.snapshot.params['name'];
      // this.moviename=name;
      this.route.params.subscribe((params:Params)=>{
      let from=params['from'];
      this.from=from;
    })
     this.route.params.subscribe((params:Params)=>{
      let to=params['to'];
      this.to=to;
      })
      this._appservice.getbuses().subscribe(list =>{this.list=list;
                                                    this.getJsonData();
                                                     } );                                               
  }

                                          
    
  
  getJsonData()
{
this.buslist=this.list;
for(let bus of this.buslist)
{
if(this.from==bus.from&&this.to==bus.to)
       {
          this.selectedBus=bus;
          break;
       }
}
for(let bus of this.recentBuslist)
{
if(this.from==bus.from&&this.to==bus.to)
       {
          this.selectedBus=bus;
          break;
       }
}
}
}
