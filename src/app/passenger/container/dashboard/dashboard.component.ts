import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerService } from '../../passenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(
    private router:Router,
    private passengerService:PassengerService) { }

  ngOnInit(){
    this.passengerService.getPassengers().subscribe(
      data => {
        this.passengers = data;
      }
      //console.log('Data :',data);
    );
  }

  handleRemove(event:Passenger){
    this.passengerService.deletePassengers(event).subscribe(data=>{
        this.passengers = this.passengers.filter(
          (passenger: Passenger) => passenger.id !== event.id
        );
    });
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

  handleView(event:Passenger){
    this.router.navigate(['/passengers',event.id]);
  }
}
