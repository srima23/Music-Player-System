import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSongsComponent } from './artist-songs.component';

describe('ArtistSongsComponent', () => {
  let component: ArtistSongsComponent;
  let fixture: ComponentFixture<ArtistSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistSongsComponent]
    });
    fixture = TestBed.createComponent(ArtistSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
