import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedChordsDialogComponent } from './saved-chords-dialog.component';

describe('SavedChordsDialogComponent', () => {
  let component: SavedChordsDialogComponent;
  let fixture: ComponentFixture<SavedChordsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedChordsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedChordsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
