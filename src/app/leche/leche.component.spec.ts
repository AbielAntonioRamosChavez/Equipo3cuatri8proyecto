import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecheComponent } from './leche.component';

describe('LecheComponent', () => {
  let component: LecheComponent;
  let fixture: ComponentFixture<LecheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
