import { ScoreboardService } from './scoreboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTitlePlayersComponent } from './header/header-title-players/header-title-players.component';
import { WidgetsPanelComponent } from './widgets-panel/widgets-panel.component';
import { WidgetComponent } from './widgets-panel/widget/widget.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { FooterComponent } from './footer/footer.component';
import { MatchdayComponent } from './fixtures/matchday/matchday.component';
import { FixturesTableComponent } from './fixtures/matchday/fixtures-table/fixtures-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTitlePlayersComponent,
    WidgetsPanelComponent,
    WidgetComponent,
    FixturesComponent,
    FooterComponent,
    MatchdayComponent,
    FixturesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ScoreboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
