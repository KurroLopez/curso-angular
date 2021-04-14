import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBasicoComponent } from './crud-basico.component';

describe('CrudBasicoComponent', () => {
  let component: CrudBasicoComponent;
  let fixture: ComponentFixture<CrudBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
