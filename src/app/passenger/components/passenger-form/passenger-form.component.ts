import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Baggage } from '../../models/baggage.interface';


@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail:Passenger;
  @Output() update:EventEmitter<Passenger>=new EventEmitter<Passenger>();

  baggage:Baggage[]=[{
    key:'none',
    value:'no baggage'
    },
    {
      key: 'hand-only',
      value: 'hand baggage'
    },
    {
      key: 'hold-only',
      value: 'hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'hand & hold baggage'
    }]
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheckIn(checkedIn:boolean){
    if(checkedIn){
      this.detail.date = Date.now();//or +new Date()
    }
  }

  handleSubmit(passenger:Passenger,isValid:boolean){
    if(isValid){
      this.update.emit(passenger);
    }
  }

}
