import { FlagsService } from './flags.service';
import { Match } from './match';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class MatchdayDataService {

  private matches: Match[] = [
    new Match(
      1,
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'Italy', 'France'
    ),
    new Match(
      2,
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'B', 'England', 'Germany',
    ),
    new Match(
      3,
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'Croatia', 'Spain',
    ),
    new Match(
      4,
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'B', 'Brazil', 'Argentina',
    ),
    new Match(
      5,
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'C', 'Belgium', 'Portugal',
    )
  ];

  configUrl = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

  constructor(private flagsService: FlagsService,
    private http: Http) {
    // console.log(this.configUrl);
    // console.log(this.http.get(this.configUrl));
  }

  getMatches() {
    return this.matches.slice();
  }

  getMatchId(index: number) {
    return this.matches[index].matchId;
  }

  getData() {
    return this.http.get(this.configUrl).map((data) => data.json());
  }
}
