import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';



const routes: Routes = [
    { path:'passengers',children:[
        { path: '', component: DashboardComponent },
        { path: ':id', component: PassengerViewerComponent}
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassengerRoutingModule {

}