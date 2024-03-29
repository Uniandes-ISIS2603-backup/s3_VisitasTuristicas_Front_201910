import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeroDetailComponent } from './viajero-detail.component';

describe('ViajeroDetailComponent', () => {
  let component: ViajeroDetailComponent;
  let fixture: ComponentFixture<ViajeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
