import { FlagsService } from './flags.service';
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
      'A', 'Italy', 'France'
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'England', 'Germany',
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'Croatia', 'Spain',
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'Brazil', 'Argentina',
    ),
    new Match(
      new Date('February 4, 2016 10:13:00').toDateString(),
      new Date('February 4, 2016 10:13:00').toLocaleTimeString(),
      'A', 'Belgium', 'Portugal',
    )
  ];

  configUrl = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

  constructor(private flagsService: FlagsService,
    private http: HttpClient) {
    console.log(this.configUrl);
    console.log(this.http.get(this.configUrl));
  }



  getData() {
    return this.http.get(this.configUrl);

  }
}
