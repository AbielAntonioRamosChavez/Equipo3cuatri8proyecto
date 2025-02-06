import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumnbComponent } from './breadscrumnb.component';

describe('BreadscrumnbComponent', () => {
  let component: BreadscrumnbComponent;
  let fixture: ComponentFixture<BreadscrumnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadscrumnbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadscrumnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
