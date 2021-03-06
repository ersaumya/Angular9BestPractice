
import { Component, OnInit, Input, Output, EventEmitter ,OnChanges} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit,OnChanges {
  
  @Input() detail:Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing:boolean=false;

  constructor() { }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
   // console.log('ngOnChanges');
  }

  ngOnInit(){
    //console.log('ngOnInit');
  }

  onNameChange(value:string){
    this.detail.name=value;
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing=!this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }

  goToPassenger(){
    this.view.emit(this.detail);
  }

}
