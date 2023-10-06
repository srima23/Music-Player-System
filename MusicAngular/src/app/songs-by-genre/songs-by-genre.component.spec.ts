import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsByGenreComponent } from './songs-by-genre.component';

describe('SongsByGenreComponent', () => {
  let component: SongsByGenreComponent;
  let fixture: ComponentFixture<SongsByGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsByGenreComponent]
    });
    fixture = TestBed.createComponent(SongsByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
