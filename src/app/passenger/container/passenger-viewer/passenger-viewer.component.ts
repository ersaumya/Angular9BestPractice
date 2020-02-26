import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../passenger.service';
import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {
  passenger:Passenger;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private passengerService: PassengerService
    ) { }

  ngOnInit(){
      this.route.paramMap.pipe(
        switchMap(params => {
          const id = +params.get("id")
          return this.passengerService.getPassenger(id);
        })).subscribe((data: Passenger) => this.passenger = data);
    }   
      
  onUpdate(event:Passenger){
    this.passengerService.updatePassengers(event)
    .subscribe((data:Passenger)=>{
      this.passenger=Object.assign({},this.passenger,event);
    })
  }

  goBack(){
    this.router.navigate(['/passengers']);
  }

}
