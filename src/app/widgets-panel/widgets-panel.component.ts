import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-panel',
  templateUrl: './widgets-panel.component.html',
  styleUrls: ['./widgets-panel.component.scss']
})
export class WidgetsPanelComponent implements OnInit {

  widgets = ['widget 1', 'widget 2', 'widget 3', 'widget 4'];

  constructor() { }

  ngOnInit() {
  }

}
