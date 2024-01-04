import { DishBuilder } from '../../creational/builder/class/dish-builder';
import { VeganDishBuilder } from '../../creational/builder/class/vegan-dish-builder';

export class BuilderFacade {
  // This is a *facade* to file src/creational/builder/index.ts
  private dishBuilder = new DishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal(): void {
    this.dishBuilder.makeMeal();
    console.log(this.dishBuilder.getMeal());
    console.log(this.dishBuilder.getPrice());
  }

  makeBeverage(): void {
    this.dishBuilder.reset();

    const meal = this.dishBuilder.makeBeverage().getMeal();
    console.log(meal);
    console.log(meal.getPrice());
  }

  makeVeganMeal(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
