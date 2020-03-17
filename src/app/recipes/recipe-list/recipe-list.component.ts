import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes is an array composed of Recipe objects.
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/Patat_speciaal_and_frikandel_speciaal.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
