import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Container
import { DashboardComponent } from './container/dashboard/dashboard.component';
//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerService } from './passenger.service';



@NgModule({
  declarations: [DashboardComponent, PassengerCountComponent, PassengerDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
  providers: [PassengerService]
})
export class PassengerModule { }
