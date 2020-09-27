import { Injectable, OnInit } from '@angular/core';
import { MatchdayDataService } from './matchday-data.service';


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  scores = [];
  matches;

  constructor(private matchdayData: MatchdayDataService) {
    this.matches = this.matchdayData.getMatches();
    // console.log(this.matches);
  }

}
