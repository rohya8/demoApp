import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-and-property-binding',
  templateUrl: './components-and-property-binding.component.html',
  styleUrls: ['./components-and-property-binding.component.css']
})
export class ComponentsAndPropertyBindingComponent implements OnInit {

  // property binding
  name1 = 'Tom';
  @Input() name2;
  @Input() name3;


  constructor() { }

  ngOnInit() {
  }

}
