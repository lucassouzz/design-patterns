export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObject = Object.create(this);

    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address = new Address('Av Brasil', 15);
const person1 = new Person('Person1', 27);
person1.addAddress(address);

const person2 = person1.clone();

person1.addresses[0].street = 'Av States';

person2.name = 'Person2';
console.log(person1);
console.log(person2);

console.log(person2.name);
console.log(person2.addresses);
