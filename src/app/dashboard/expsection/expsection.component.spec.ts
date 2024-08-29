import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpsectionComponent } from './expsection.component';

describe('ExpsectionComponent', () => {
  let component: ExpsectionComponent;
  let fixture: ComponentFixture<ExpsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
