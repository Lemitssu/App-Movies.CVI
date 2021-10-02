import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const data = environment;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private ejecuteQuery<T>(query: string) {
    query = data.url + query;
    query += `&api_key=${data.api_key}&language=es`;
    return this.http.get<T>(query);
  }

  getFeature() {
    // debugger;
    const today = new Date();
    const lasday = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;

    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lasday}`;
    return this.ejecuteQuery<RespuestaMDB>(
      `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`
    );
  }
}
