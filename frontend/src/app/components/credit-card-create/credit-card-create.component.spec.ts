import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCreateComponent } from './credit-card-create.component';

describe('CreditCardCreateComponent', () => {
  let component: CreditCardCreateComponent;
  let fixture: ComponentFixture<CreditCardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
