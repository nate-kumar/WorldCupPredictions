import { MatchdayDataService } from './../../../../../e2e/app/matchday-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures-table',
  templateUrl: './fixtures-table.component.html',
  styleUrls: ['./fixtures-table.component.css'],
  providers: [MatchdayDataService]
})
export class FixturesTableComponent implements OnInit {



  matches: string[] = [
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
    'break',
    'match', 'match', 'match',
  ];

  matchData;



  constructor(private matchdayDataService: MatchdayDataService) { }

  ngOnInit() {
    this.matchData = this.matchdayDataService.matches;
  }

}
