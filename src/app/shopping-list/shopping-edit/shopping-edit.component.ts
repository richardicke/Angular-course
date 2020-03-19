import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild ('amountInput', {static: true}) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();
  // Instead of manually declaring the event payload type we can set it to the Ingredient model.
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    // construct new Ingredient
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    )
    this.ingredientAdded.emit(newIngredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
