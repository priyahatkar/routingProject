import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoaredComponent } from './dash-boared.component';

describe('DashBoaredComponent', () => {
  let component: DashBoaredComponent;
  let fixture: ComponentFixture<DashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
