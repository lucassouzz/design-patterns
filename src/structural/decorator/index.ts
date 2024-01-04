import { ProductCustomDecorator } from './product/product-custom-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const stampedFrontAndBackTShirt = new ProductStampDecorator(stampedTShirt);
const customTShirt = new ProductCustomDecorator(tShirt);

console.log(tShirt.getName(), tShirt.getPrice());
console.log(stampedTShirt.getName(), stampedTShirt.getPrice());
console.log(
  stampedFrontAndBackTShirt.getName(),
  stampedFrontAndBackTShirt.getPrice(),
);
console.log(customTShirt.getName(), customTShirt.getPrice());
