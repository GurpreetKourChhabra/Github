import { Component, OnInit,EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //     new Ingredient("Rice",2),
  //     new Ingredient("Apples",2),
  //     new Ingredient("Orange",4)
  // ];
  ingredients : Ingredient[];
  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.shoppingList.getIngredients();
      this.shoppingList.ingredientsChanged
      .subscribe(
          (ingredients: Ingredient[]) => {
              console.log(" Ingredienrs " + ingredients);
              this.ingredients = ingredients;
          }
      );
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //     this.ingredients.push(ingredient);
  //     console.log("Pushed");
  // }
}
