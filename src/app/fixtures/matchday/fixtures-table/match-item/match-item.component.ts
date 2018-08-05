import { FlagsService } from './../../../../../../e2e/app/flags.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss']
})
export class MatchItemComponent implements OnInit {

  flagTeamOne;
  flagTeamTwo;

  @Input() matchItemData;

  constructor(private flagsService: FlagsService) { }


  ngOnInit() {
    console.log(this.matchItemData.teamOneName);
    console.log(this.flagsService.getFlag(this.matchItemData.teamOneName));

    this.flagTeamOne = this.flagsService.getFlag(this.matchItemData.teamOneName);
    this.flagTeamTwo = this.flagsService.getFlag(this.matchItemData.teamTwoName);
  }

}

