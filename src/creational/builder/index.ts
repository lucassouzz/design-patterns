import { DishBuilder } from './class/dish-builder';
import { VeganDishBuilder } from './class/vegan-dish-builder';

const dishBuilder = new DishBuilder();
dishBuilder.makeMeal();
console.log(dishBuilder.getMeal());
console.log(dishBuilder.getPrice());

dishBuilder.reset();

const meal = dishBuilder.makeBeverage().getMeal();
console.log(meal);
console.log(meal.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
