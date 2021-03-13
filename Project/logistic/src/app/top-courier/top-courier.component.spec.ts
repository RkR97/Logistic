import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourierComponent } from './top-courier.component';

describe('TopCourierComponent', () => {
  let component: TopCourierComponent;
  let fixture: ComponentFixture<TopCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
