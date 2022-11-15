import { Component, OnInit} from '@angular/core';
import { Movies } from 'src/app/iMovies.interface';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  movies: Movies [] = [];
  yetToWatchMovies: Movies [] = [];
  watchedMovies: Movies [] = [];

  constructor() { }

  ngOnInit(): void {

  }

  

}
