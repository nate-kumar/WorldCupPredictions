import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/images/58430032a6515b1e0ad75b3f.png';
  date = '23/06/2018';
  time = '07:33:34';

  @Output() widgetToggled = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleWidgets() {
    console.log('worked');
    this.widgetToggled.emit();
  }

}
