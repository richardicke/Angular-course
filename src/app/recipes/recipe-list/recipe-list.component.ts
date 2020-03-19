import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes is an array composed of Recipe objects.
  recipes: Recipe[] = [
    new Recipe(
      'Frikandel Speciaal',
      'Gewoon vies toch',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/Patat_speciaal_and_frikandel_speciaal.jpg'),
    new Recipe(
      'Shoarma Kapsalon',
      'Kan niet hoor dit',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Kapsalon_Amstelveen.jpg'),
    new Recipe(
      'Halve haan',
      'Ik zeg niet doen',
      'https://www.cafetariadesnacknees.nl/images/hh.jpg'),
    new Recipe(
      'Afhaalchinees',
      'Ik heb mijn twijfels',
      'https://media-cdn.tripadvisor.com/media/photo-s/11/39/f9/3f/mooi-verpakt-in-bakjes.jpg')              
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
