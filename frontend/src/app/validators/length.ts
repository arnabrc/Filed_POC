import { AbstractControl, AsyncValidator, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, filter } from 'rxjs/operators';

export class LengthValidation {
  static createValidator() {
    const message = {
      'LengthValidation': {
        'message': 'Value must be of 3 digits'
      }
    };
    return (control: AbstractControl) => {
      const newValue = control.value;
      return newValue && (newValue.length < 3 || newValue.length > 3)  ? message : null;
    };
  }
}
