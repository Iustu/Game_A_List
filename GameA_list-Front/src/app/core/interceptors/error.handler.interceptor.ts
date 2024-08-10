import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }

    this.spinner.hide();
    console.error('ErrorHandler', error);
  }
  
}
