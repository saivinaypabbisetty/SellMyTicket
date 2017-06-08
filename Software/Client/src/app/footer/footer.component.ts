import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footercontent=["Login","Register","About","Post your Tickets"];
  constructor() {
    
   }

  ngOnInit() {
  }

}
