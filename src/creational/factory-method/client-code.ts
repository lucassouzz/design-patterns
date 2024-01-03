import { randomCarAlgorithm } from './main/random-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Pedro', 'Paulo', 'Joao', 'Maria'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const customerName = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(customerName);
  vehicle.stop();
  console.log('---');
}
