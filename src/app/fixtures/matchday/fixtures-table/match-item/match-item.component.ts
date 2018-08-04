import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {

  flagTeamOne = 'assets/images/english-flag-small.png';
  flagTeamTwo = 'assets/images/french-flag-small.png';
  @Input() matchItemData;

  constructor() { }

  ngOnInit() {
    console.log(this.matchItemData.teamOneName);
  }

}
