import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatBadgeModule} from '@angular/material/badge';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MsgComponent } from './msg/msg.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PayComponent } from './pay/pay.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from  '@angular/common/http';
import { CheckoutModule } from 'paytm-blink-checkout-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MsgComponent,
    PayComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
