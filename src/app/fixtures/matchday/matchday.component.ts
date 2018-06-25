import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.css']
})
export class MatchdayComponent implements OnInit {

  @Input() titleText: string;

  constructor() { }

  ngOnInit() {
  }

}
