import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagessectionComponent } from './messagessection.component';

describe('MessagessectionComponent', () => {
  let component: MessagessectionComponent;
  let fixture: ComponentFixture<MessagessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagessectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
