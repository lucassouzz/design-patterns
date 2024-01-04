import {
  EmailValidatorProtocol,
  EmailValidatorFnProtocol,
} from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('E-mail é válido (CLASS)');
  } else {
    console.log('E-mail é inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('E-mail é válido (FN)');
  } else {
    console.log('E-mail é inválido (FN)');
  }
}

const email = 'lucas@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
