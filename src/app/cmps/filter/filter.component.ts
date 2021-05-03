import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  topic;
  
  constructor() { }

  ngOnInit(): void {
  }

  select(e = null) {
    this.topic = e;
    this.onSelect.emit(e);

  }

}
