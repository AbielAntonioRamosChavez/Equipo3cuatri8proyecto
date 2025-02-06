import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadarmeniComponent } from './headarmeni.component';

describe('HeadarmeniComponent', () => {
  let component: HeadarmeniComponent;
  let fixture: ComponentFixture<HeadarmeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadarmeniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadarmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
