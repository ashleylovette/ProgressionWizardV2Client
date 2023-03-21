import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordIdentifierComponent } from './chord-identifier.component';

describe('ChordIdentifierComponent', () => {
  let component: ChordIdentifierComponent;
  let fixture: ComponentFixture<ChordIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordIdentifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
