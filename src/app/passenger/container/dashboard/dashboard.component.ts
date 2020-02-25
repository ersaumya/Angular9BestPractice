import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerService } from '../../passenger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService:PassengerService) { }

  ngOnInit(){
    this.passengerService.getPassengers()
    .subscribe(data=>{
      //console.log('Data :',data);
      this.passengers=data;
    });
  }

  handleRemove(event:Passenger){
    this.passengers=this.passengers
    .filter((passenger:Passenger)=>passenger.id!== event.id);
  }
  handleEdit(event:Passenger){
    this.passengerService.updatePassengers(event).subscribe(data => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
    });
  }
}
