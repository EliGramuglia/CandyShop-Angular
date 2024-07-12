import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Candy } from './candy-list/Candy';

const URL = 'https://669089e2c0a7969efd9c6b91.mockapi.io/api/v1/candies/candies';

@Injectable({
  providedIn: 'root'
})
export class CandyDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Candy[]> {
    //Es lo mismo que hacer un fetch('url', {method: 'GET'})
    return this.http.get<Candy[]>(URL).pipe(
      tap((candies: Candy[]) => candies.forEach(candy => candy.quantity = 0)));
  }
}
