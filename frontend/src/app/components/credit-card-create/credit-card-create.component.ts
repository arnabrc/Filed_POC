import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateValidation } from '../../validators/date';
import { LengthValidation } from '../../validators/length';

@Component({
  selector: 'app-credit-card-create',
  templateUrl: './credit-card-create.component.html',
  styleUrls: ['./credit-card-create.component.css']
})

export class CreditCardCreateComponent implements OnInit {
  submitted = false;
  creditCardForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.creditCardForm = this.fb.group({
      creditCardNumber: ['', [Validators.required, Validators.pattern('^[0-9.-]+$')]],
      cardHolder: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      expirationDate: ['', [Validators.required, DateValidation.createValidator()]],
      securityCode: ['', [LengthValidation.createValidator()]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.creditCardForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('this.creditCardForm: ', this.creditCardForm.value);
    if (!this.creditCardForm.valid) {
      console.log('false');
      return false;
    } else {
      console.log('true');
      this.apiService.createCreditCard(this.creditCardForm.value).subscribe(
        (res) => {
          window.alert('Credit card successfully created!');
          location.reload();
        }, (error) => {
          console.log(error);
        });
    }
  }

}
