import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousComponent } from './curious.component';

describe('CuriousComponent', () => {
  let component: CuriousComponent;
  let fixture: ComponentFixture<CuriousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
