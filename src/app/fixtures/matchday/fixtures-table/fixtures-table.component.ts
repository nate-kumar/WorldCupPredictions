import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures-table',
  templateUrl: './fixtures-table.component.html',
  styleUrls: ['./fixtures-table.component.css']
})
export class FixturesTableComponent implements OnInit {

  flagTeamOne = 'assets/images/english-flag-small.png';
  flagTeamTwo = 'assets/images/french-flag-small.png';

  matches: string[] = [
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
  ];



  constructor() { }

  ngOnInit() {
  }

}
