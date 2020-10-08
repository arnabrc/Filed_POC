import { AbstractControl, AsyncValidator, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, filter } from 'rxjs/operators';

export class DateValidation {
  static createValidator() {
    const date = new Date();
    const message = {
      'DateValidation': {
        'message': 'Date cannot be in the past'
      }
    };
    return (control: AbstractControl) => {
      const newDate = new Date(control.value);
      return newDate && newDate < date ? message : null;
    };
  }
}
