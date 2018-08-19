import { FlagsService } from './../../../../../../e2e/app/flags.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss']
})
export class MatchItemComponent implements OnInit {

  flagTeamOne;
  flagTeamTwo;
  todayActive = false;

  @ViewChild('matchItemContainer') matchItemContainerRef: ElementRef;
  @Input() matchItemData;

  constructor(private flagsService: FlagsService) { }

  ifToday() {
    if (this.matchItemData.matchGroup === 'A') {
      this.todayActive = true;
      console.log(this.matchItemData.matchGroup);
      // this.matchItemContainerRef.nativeElement.style.setProperty('--today-active-color', 'rgb(139,230,216)');
    }
  }

  ngOnInit() {
    // console.log(this.matchItemData.teamOneName);
    // console.log(this.flagsService.getFlag(this.matchItemData.teamOneName));

    this.flagTeamOne = this.flagsService.getFlag(this.matchItemData.teamOneName);
    this.flagTeamTwo = this.flagsService.getFlag(this.matchItemData.teamTwoName);

    this.ifToday();
  }




}

