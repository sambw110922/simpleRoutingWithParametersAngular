import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableViewerComponent } from './vegetable-viewer.component';

describe('VegetableViewerComponent', () => {
  let component: VegetableViewerComponent;
  let fixture: ComponentFixture<VegetableViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetableViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
