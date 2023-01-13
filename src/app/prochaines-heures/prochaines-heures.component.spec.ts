import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainesHeuresComponent } from './prochaines-heures.component';

describe('ProchainesHeuresComponent', () => {
  let component: ProchainesHeuresComponent;
  let fixture: ComponentFixture<ProchainesHeuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProchainesHeuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProchainesHeuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
