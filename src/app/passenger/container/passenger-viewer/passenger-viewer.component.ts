import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../passenger.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {
  passenger:Passenger;

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.passengerService.getPassenger(1)
    .subscribe((data:Passenger)=>this.passenger=data);
  }

  onUpdate(event:Passenger){
    this.passengerService.updatePassengers(event)
    .subscribe((data:Passenger)=>{
      this.passenger=Object.assign({},this.passenger,event);
    })
  }

}
