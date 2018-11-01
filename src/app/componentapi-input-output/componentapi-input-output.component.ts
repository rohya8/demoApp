import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentapi-input-output',
  templateUrl: './componentapi-input-output.component.html',
  styleUrls: ['./componentapi-input-output.component.css']
})
export class ComponentapiInputOutputComponent implements OnInit {
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }
}
