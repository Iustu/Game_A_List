import { Injectable } from '@angular/core';
import { ValidationMessagesConfig, ValidationMessagesService } from '@house-of-angular/validation-messages';

@Injectable({
  providedIn: 'root'
})

export class ValidationMessagesConfigService {

  constructor( public validationMessagesService: ValidationMessagesService ) {

    console.log('entrou no ValidationMessagesConfigService')
    this.validationMessagesService.setValidationMessages(validationMsgConfig)
  }

}

const validationMsgConfig: ValidationMessagesConfig = {
  required: 'Preencha este campo',
  email: 'Email inválido',
  min: 'O número mínimo aceito é {{min}}',
  max: 'O número máximo aceito é {{max}}',
  minlength: 'Preencha no mínimo {{requiredLength}} caracteres',
  maxlength: 'Preencha no máximo {{requiredLength}} caracteres',
  pattern: 'Informação inválida',
  mask: 'Informação inválida',
  customValidator: 'Custom validator error message',
  lettersPattern: {
    message: 'Must contains only letters',
    pattern: '$[a-zA-Z]*$',
  },
}

