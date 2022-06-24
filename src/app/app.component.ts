import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MsgComponent } from './msg/msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dial:MatDialog){}
  title = 'demoSwal';


}
