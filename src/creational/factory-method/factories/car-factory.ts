import { Vehicle } from '../vehicle/vehicle';
import { Car } from '../vehicle/car';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
