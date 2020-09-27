import { MatchdayDataService } from './../matchday-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  matchdays: string[] = [
    'Matchday 1', 'Matchday 2', 'Matchday 3'
  ];

  matches: any;

  constructor(private matchdayDataS: MatchdayDataService) { }

  ngOnInit() {
    this.matchdayDataS.getData().subscribe(
      (response) => {
        this.matches = response;
        console.log(this.matches);
      }
    );
  }



}
