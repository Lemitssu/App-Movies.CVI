import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private moviesService: MoviesService) {}
  peliculasNuevas: Pelicula[] = [];
  slideOpts = {
    initialSlide:0,
    slidesPerView: 1.3,
    freeMode: true,
    speed: 300,
    spaceBetween: 8,
    loop: true,
  }

  ngOnInit() {
    this.moviesService.getFeature().subscribe((res) => {
      // console.log('AWS', res.results);
      this.peliculasNuevas = res.results;
    });
  }
}
