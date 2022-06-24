import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {PayComponent} from './pay/pay.component'
import {PaymentComponent} from './payment/payment.component'
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'pay',component: PayComponent},
  {path:'payment',component: PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
