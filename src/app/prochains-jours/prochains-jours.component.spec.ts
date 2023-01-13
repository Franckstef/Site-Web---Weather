import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainsJoursComponent } from './prochains-jours.component';

describe('ProchainsJoursComponent', () => {
  let component: ProchainsJoursComponent;
  let fixture: ComponentFixture<ProchainsJoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProchainsJoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProchainsJoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
