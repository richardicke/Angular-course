import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  // ingredients is an array of objects of type Ingredient
  private ingredients: Ingredient[] = [
    new Ingredient('Reuzel', 2),
    new Ingredient('Zure zult', 10),
    new Ingredient('Apenhaar', 6),
  ];

  getIngredients() {
    // we don't want to return a direct reference to our private array as we
    // don't want it to be mutated outside of this service.
    // Call slice with no arguments to return a copy.
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
