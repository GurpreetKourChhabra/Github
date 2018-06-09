import { EventEmitter , Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipe: Recipe[] = [
        new Recipe("Recipe Item",
        "This is a tasty recipe, Decription",
        "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-couscous-chicken-ck.jpg?itok=7geW7sC",[
            new Ingredient("Rice",2),
            new Ingredient("Wheat",3),
            new Ingredient("Milk",4),
            new Ingredient("Water",5)
        ]),
        new Recipe("Another Test Recipe Item","Recipe Decription","http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-couscous-chicken-ck.jpg?itok=7geW7sC",[
            new Ingredient("Bajra",2),
            new Ingredient("Chocolate",3),
            new Ingredient("apple",4),
            new Ingredient("butter",5)
        ])
    ];

    constructor(private shoppingList:ShoppingListService) {

    }
    getRecipe() {
        return this.recipe.slice();
    }
    getRecipeById(id:number) {
        return this.recipe[id];
    }
    addIngredientsToShoppingList(ingredient:Ingredient[]) {
        // this.shoppingList.addIngredients(ingredient);
    }
}
