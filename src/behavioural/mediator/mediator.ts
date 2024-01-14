import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  add(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): SellerProduct | void {
    let product;
    for (let index = 0; index < this.sellers.length; index++) {
      product = this.sellers[index].sell(id);

      if (product) {
        console.log(
          `Here is the product id: ${product.id}, name: ${product.name}, price: ${product.price}.`,
        );
        return;
      }

      console.log(`Product with id: ${id} not found.`);
    }
  }

  showProducs(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
