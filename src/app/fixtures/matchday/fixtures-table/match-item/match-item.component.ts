import { NgForm } from '@angular/forms';
import { ScoresService } from './../../../../scores.service';
import { FlagsService } from '../../../../flags.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss']
})
export class MatchItemComponent implements OnInit {
  @ViewChild('f') matchForm: NgForm;
  flagTeamOne;
  flagTeamTwo;
  todayActive = false;
  teamOneScore = 2;
  teamTwoScore: number;
  teamOneResult: number;
  teamTwoResult: number;

  @ViewChild('matchItemContainer') matchItemContainerRef: ElementRef;
  @Input() matchItemData;

  constructor(private flagsService: FlagsService,
              private scoresService: ScoresService) { }

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

    // this.resultOne = this.scoresService.scores.

    this.ifToday();

    // console.log(this.matchForm);
  }

  onSubmit() {
    this.teamOneScore = this.matchForm.value.scoreOne;
  }




}

