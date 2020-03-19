import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // create event emitter, publish it to the parent component using the 
  // @Output decorator
  @Output() feature_selected = new EventEmitter<string>();

  // click handler which will emit stuff
  onSelect(feature: string) {
    this.feature_selected.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
