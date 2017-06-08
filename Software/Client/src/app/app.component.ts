import { Component } from '@angular/core';
import {Bus} from './bus.model'
import {Movie} from '../models/movie.model'
import {AppService} from 'app/app.service'
import { MovielistComponent } from './movielist/movielist.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'app works!';
}
