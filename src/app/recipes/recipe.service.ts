import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

// Simple service, no decorators needed, just export
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  // recipes is an array composed of Recipe objects.
  // Add a bunch of recipes.
  private recipes: Recipe[] = [
    new Recipe(
      'Frikandel Speciaal',
      'Gewoon vies toch',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/Patat_speciaal_and_frikandel_speciaal.jpg',
    ),
    new Recipe(
      'Shoarma Kapsalon',
      'Kan niet hoor dit',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Kapsalon_Amstelveen.jpg',
    ),
    new Recipe(
      'Halve haan',
      'Ik zeg niet doen',
      'https://www.cafetariadesnacknees.nl/images/hh.jpg',
    ),
    new Recipe(
      'Afhaalchinees',
      'Ik heb mijn twijfels',
      'https://media-cdn.tripadvisor.com/media/photo-s/11/39/f9/3f/mooi-verpakt-in-bakjes.jpg',
    ),
    new Recipe(
      'Haring',
      'In één woord bah',
      'https://hosting.photobucket.com/albums/y77/jopijopi/2015/weblog/haring.jpg~original',
    ),
  ];

  getRecipes() {
    // we don't want to return a direct reference to our private array as we
    // don't want it to be mutated outside of this service.
    // Call slice with no arguments to return a copy.
    return this.recipes.slice();
  }
}
