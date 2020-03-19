import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Declare local property recipe, of type Recipe. Import the model at the top.
  // Add `@Input` decorator to allow this to be set from outside this component.
  @Input() recipe: Recipe;
  // this event emitter won't pass anything. The parent component already knows what
  // to pass.
  // custom events don't propagate up!
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    // emit custom event
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
