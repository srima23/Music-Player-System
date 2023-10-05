import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSongsComponent } from './fav-songs.component';

describe('FavSongsComponent', () => {
  let component: FavSongsComponent;
  let fixture: ComponentFixture<FavSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavSongsComponent]
    });
    fixture = TestBed.createComponent(FavSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
