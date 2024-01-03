import { Customer } from './customer-interface';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' - pessoa física';
  }
}
