import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello ';
  fname;
  lname;
  fullname;
  namelist = [];


  onClickAdd() {
    console.log('In method');
    // this.fname = 'World';
    this.fullname = this.fname + ' ' + this.lname;
    this.namelist.push(this.fullname);
  }
}
