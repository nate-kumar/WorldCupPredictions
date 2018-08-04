import { ScoreboardService } from './../../scoreboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  players;

  constructor(
    private scoreboardS: ScoreboardService
  ) { }

  ngOnInit() {
    this.players = this.scoreboardS.scores;
  }

}
