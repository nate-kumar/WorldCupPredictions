import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showWidgetPanel: boolean;

  ngOnInit() {
    console.log('test');
    this.showWidgetPanel = true;
  }

  widgetPanelToggle() {
      this.showWidgetPanel = !this.showWidgetPanel;
      console.log('widget Toggle');
  }


}
