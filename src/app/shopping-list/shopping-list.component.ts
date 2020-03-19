import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients is an array of objects of type Ingredient
  ingredients: Ingredient[] = [
    new Ingredient('Reuzel', 2),
    new Ingredient('Zure zult', 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
