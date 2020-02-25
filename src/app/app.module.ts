import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerModule } from './passenger/passenger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //Custome Modules
    PassengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
