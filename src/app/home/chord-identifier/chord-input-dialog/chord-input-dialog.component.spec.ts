import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordInputDialogComponent } from './chord-input-dialog.component';

describe('ChordInputDialogComponent', () => {
  let component: ChordInputDialogComponent;
  let fixture: ComponentFixture<ChordInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
