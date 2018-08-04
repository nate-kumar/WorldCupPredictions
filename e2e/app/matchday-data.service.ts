import { Match } from './match';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchdayDataService {

  matches: Match[] = [
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'England', 'France'
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'England', 'France'
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'England', 'France'
    )
  ];

  configUrl = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

  constructor(private http: HttpClient) {
    console.log(this.configUrl);
  }



  getData() {
    return this.http.get(this.configUrl);
  }
}
