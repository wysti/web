import { Component } from '@angular/core';

@Component({
  selector: 'args-menu',
  templateUrl: `app/menu/menu.html`,
})
export class MenuComponent  {
  bgnd: string;

  constructor(){
    this.bgnd = "red";
  }

  testing = 'Other Menu wot'; 

  changeColour() {
    this.bgnd = "green"
  }


}
