import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitlePlayersComponent } from './header-title-players.component';

describe('HeaderTitlePlayersComponent', () => {
  let component: HeaderTitlePlayersComponent;
  let fixture: ComponentFixture<HeaderTitlePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTitlePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitlePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
