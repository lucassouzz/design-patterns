import { Mediator } from './mediator';

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    this.mediator.showProducs();
  }

  buy(id: string): void {
    this.mediator.buy(id);
  }
}
