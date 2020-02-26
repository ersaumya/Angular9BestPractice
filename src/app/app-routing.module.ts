import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';



const routes: Routes = [
  { path: '', redirectTo:'passengers',pathMatch:'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
