import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  showWidgetPanel: boolean;
  @ViewChild('appContainer') appContainerRef: ElementRef;

  ngOnInit() {
    this.showWidgetPanel = false;
  }

  widgetPanelToggle() {
      this.showWidgetPanel = !this.showWidgetPanel;
      if (this.showWidgetPanel) {
        this.appContainerRef.nativeElement.style.setProperty('--header-height', '200px');
      } else {
        this.appContainerRef.nativeElement.style.setProperty('--header-height', '0px');
      }
  }


}
