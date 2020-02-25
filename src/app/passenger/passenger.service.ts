import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: "root"
})
export class PassengerService {
  private PASSENGER_API: string = "http://localhost:3000/passengers";
  constructor(private httpClient: HttpClient) {
    //console.log(this.httpClient);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient
      .get<Passenger[]>(this.PASSENGER_API)
      .pipe(tap(data => console.log(data)));
  }
  updatePassengers(passenger:Passenger): Observable<Passenger> {
    return this.httpClient
      .put<Passenger>(`${this.PASSENGER_API}/${passenger.id}`,passenger)
      .pipe(tap(data => console.log(data)));
  }
}
