import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsActuellesComponent } from './conditions-actuelles.component';

describe('ConditionsActuellesComponent', () => {
  let component: ConditionsActuellesComponent;
  let fixture: ComponentFixture<ConditionsActuellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsActuellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsActuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
