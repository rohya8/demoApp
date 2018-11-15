import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname;
  lname;
  fullname;
  namelist = [];

  post = { isSelected: 'true' };



  onClickAdd() {
    console.log('In method');
    // this.fname = 'World';
    this.fullname = this.fname + ' ' + this.lname;
    this.namelist.push(this.fullname);
  }

  onComponentApiClick(isSelected) {
    // console.log('In AppComponent');
    console.log('In AppComponent : ' + isSelected);       // Passing value
  }
}
