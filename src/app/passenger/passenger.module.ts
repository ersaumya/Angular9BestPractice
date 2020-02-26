import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Container
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';

//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

//service
import { PassengerService } from './passenger.service';
import { PassengerRoutingModule } from './passenger-routing.module';




@NgModule({
  declarations: [
    DashboardComponent, PassengerCountComponent, PassengerDetailsComponent, PassengerViewerComponent, PassengerFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    PassengerRoutingModule
  ],
  
  providers: [PassengerService]
})
export class PassengerModule { }
