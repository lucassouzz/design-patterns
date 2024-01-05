import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Lucas', '77', 'Av A', 'SC');
deliveryContext(factory, 'Souza', '77', 'Av A', 'SC');
deliveryContext(factory, 'Pedro', '77', 'Av A', 'SC');
deliveryContext(factory, 'Paulo', '77', 'Av B', 'SC');
deliveryContext(factory, 'Joao', '77', 'Av A', 'PR');

console.log(factory.getLocations());
