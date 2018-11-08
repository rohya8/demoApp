import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  // numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  numbersList;

  constructor() { }

  ngOnInit() {
  }

  loadCourses() {
    this.numbersList = [
      { id: 123, name: 'ABCD' },
      { id: 23, name: 'LMN' },
      { id: 123, name: 'EFG' },
      { id: 23, name: 'PQR' },
      { id: 123, name: 'PQRST' },
      { id: 23, name: 'WXYZ' }
    ];
  }

  onAdd() {
    if (!this.numbersList) {
      this.numbersList = [{ id: 0, name: 'JKL' }];
    }  else {
      this.numbersList.push({ id: this.numbersList.length, name: this.numbersList.length + 'JKL' });
    }
  }

  onRemove(item) {
    this.numbersList.splice(this.numbersList.indexOf(item), 1);
  }

  trackNumberList(index, item) {
    return item ? item.id : undefined;
  }

}
