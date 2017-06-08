import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
@Input() movielist:any;
  constructor() {
  
   }

  ngOnInit() {
  }

}
