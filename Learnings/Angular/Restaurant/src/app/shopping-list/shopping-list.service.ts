import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("Rice",2),
        new Ingredient("Apples",2),
        new Ingredient("Orange",4)
    ];

    getIngredients() {
        console.log(this.ingredients);
        console.log(this.ingredients.slice());
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.
        emit(this.ingredients);

    }

    // addIngredients(ingredients:Ingredient[]) {
    //     // for(let ingredient of ingredients) {
    //     //     this.addIngredient(ingredient);
    //     // }
    //     console.log()
    //     this.ingredients.push(...ingredients);
    //     this.ingredientsChanged(this.ingredients.splice());
    // }
}
