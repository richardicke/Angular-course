import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();
  // Instead of manually declaring the event payload type (like above)
  // we can just set it to the Ingredient model.
  // Add decorator to make this emitter listenable to outside this component.
  // REPLACE WITH SERVICE
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    // construct new Ingredient
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit(): void {}
}
