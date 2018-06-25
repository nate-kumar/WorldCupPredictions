import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title-players',
  templateUrl: './header-title-players.component.html',
  styleUrls: ['./header-title-players.component.css']
})
export class HeaderTitlePlayersComponent implements OnInit {

  playerName = 'Nathan Kumar';
  partnerName = 'Joe Tomlinson';

  constructor() { }

  ngOnInit() {
  }

}
