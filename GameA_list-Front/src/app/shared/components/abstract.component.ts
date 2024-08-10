import { inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

export abstract class AbstractComponent {
  public activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  public spinner: NgxSpinnerService = inject(NgxSpinnerService);
  public toastr: ToastrService = inject(ToastrService);
  public fb: FormBuilder = inject(FormBuilder);
  public varRoute : ActivatedRoute = inject(ActivatedRoute);

  public uid: string | null | undefined;

  public handlerError(error: any){
    this.spinner.hide();
    this.toastr.error('Erro ao realizar operação');
    throw error;
  }

  public success(response: any){
    this.spinner.hide();
    this.toastr.success('Operação realizada com sucesso!');
  }

  public getFormJson(formGroup: FormGroup): any{
    return formGroup.getRawValue();
  }

  public setFormJson(json: any, formGroup: FormGroup): any{
    formGroup.patchValue(json);
  }

}
