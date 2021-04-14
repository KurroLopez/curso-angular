import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueraComponent } from './fuera.component';

describe('FueraComponent', () => {
  let component: FueraComponent;
  let fixture: ComponentFixture<FueraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FueraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FueraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
