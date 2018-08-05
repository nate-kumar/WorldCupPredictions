import { FlagsService } from './../../e2e/app/flags.service';
import { RoutingModule } from './routing.module';
import { ScoreboardService } from './scoreboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTitlePlayersComponent } from './header/header-title-players/header-title-players.component';
import { WidgetsPanelComponent } from './widgets-panel/widgets-panel.component';
import { WidgetComponent } from './widgets-panel/widget/widget.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { FooterComponent } from './footer/footer.component';
import { MatchdayComponent } from './fixtures/matchday/matchday.component';
import { FixturesTableComponent } from './fixtures/matchday/fixtures-table/fixtures-table.component';
import { MatchItemComponent } from './fixtures/matchday/fixtures-table/match-item/match-item.component';
import { TestCompComponent } from './test-comp/test-comp.component';

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
    FixturesTableComponent,
    MatchItemComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ScoreboardService, FlagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
