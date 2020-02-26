import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerModule } from './passenger/passenger.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    NotFoundComponent
  ],
  imports: [
    //Custome Modules 
    //**Note-Always put feature routing module before application routing module
    PassengerModule,
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
