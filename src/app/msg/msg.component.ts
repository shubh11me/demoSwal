import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  constructor(public dial:MatDialog){}
  badgeSize:any = 'large';
  overlap=false;
  togBadge() {
    if (this.badgeSize == 'large') {
      this.badgeSize = 'small';
    }else{
      this.badgeSize = 'large';
    }
  }

openDialo(){
this.dial.open(MsgComponent);
}
  ngOnInit(): void {
  }

}
