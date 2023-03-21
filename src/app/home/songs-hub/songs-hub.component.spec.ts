import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsHubComponent } from './songs-hub.component';

describe('SongsHubComponent', () => {
  let component: SongsHubComponent;
  let fixture: ComponentFixture<SongsHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
