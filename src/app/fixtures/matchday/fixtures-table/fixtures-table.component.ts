import { MatchdayDataService } from '../../../matchday-data.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fixtures-table',
  templateUrl: './fixtures-table.component.html',
  styleUrls: ['./fixtures-table.component.scss'],
  providers: [MatchdayDataService]
})
export class FixturesTableComponent implements OnInit {


  @ViewChild('f') appContainerRef: ElementRef;

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
  todayActive;

  // ifToday() {
  //   this.matchData.forEach(element => {
  //     if (element.matchGroup === 'A') {
  //       this.todayActive = true;
  //       console.log(element.matchGroup + 'asd');
  //     }
  //   });
  // }

  constructor(private matchdayDataService: MatchdayDataService) { }

  ngOnInit() {
    this.matchData = this.matchdayDataService.getMatches();
    // this.ifToday();
  }




}
