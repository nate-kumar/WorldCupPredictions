import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable()
export class ScoreboardService {

  scores: Player[] = [
    new Player('Nathan Kumar', 1, 10),
    new Player('Joe Tomlinson', 2, 8),
    new Player('Pete Wilkins', 3, 5),
    new Player('Dom Barnard', 4, 3)
  ];



  constructor() { }

}
