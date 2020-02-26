import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {
  @Input() detail:Passenger;

  constructor() { }

  ngOnInit(): void {
  }
  toggleCheckIn(checkedIn:boolean){
    if(checkedIn){
      this.detail.date = Date.now();//or +new Date()
    }

  }

}
