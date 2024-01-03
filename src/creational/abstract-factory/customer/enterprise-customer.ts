import { Customer } from './customer-interface';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' - pessoa jurídica';
  }
}
