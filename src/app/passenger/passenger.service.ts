import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { HttpClient,HttpHeaders,HttpRequest } from "@angular/common/http";
import { Observable,throwError} from "rxjs";
import { tap, catchError } from "rxjs/operators";




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
      .pipe(
        tap(data => console.log(data)),
        catchError((error:any)=>Observable.throw(error.json()))
        );
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .put<Passenger>(
        `${this.PASSENGER_API}/${passenger.id}`,
        passenger,
        httpOptions
      )
      .pipe(
        tap(data => console.log(data)),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  deletePassengers(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
      .delete<Passenger>(`${this.PASSENGER_API}/${passenger.id}`)
      .pipe(
        tap(data => console.log(data)),
        catchError((error:any)=>Observable.throw(error.json()))
      );
  }
}
