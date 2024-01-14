import { Mediator } from './mediator';
import { Seller } from './seller';
import { Buyer } from './buyer';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.add({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.add({ id: '2', name: 'Caneta', price: 9.9 });

const seller2 = new Seller();
seller2.add({ id: '3', name: 'Carro', price: 49000.9 });
seller2.add({ id: '4', name: 'Lápis', price: 1.9 });

mediator.add(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
