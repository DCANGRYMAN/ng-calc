import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSuccessComponent } from './credit-success.component';

describe('CreditSuccessComponent', () => {
  let component: CreditSuccessComponent;
  let fixture: ComponentFixture<CreditSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
