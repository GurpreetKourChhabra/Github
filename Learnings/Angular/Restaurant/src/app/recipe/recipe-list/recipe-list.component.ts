import { Component,
     OnInit,
     // Input,
     // Output,
     EventEmitter
 } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[];
  constructor(private recipeService:RecipeService) {
    this.recipe = this.recipeService.getRecipe();
  }
  // onRecipeSelected(recipe:Recipe) {
  //     this.recipeWasSelected.emit(recipe);
  // }//recipe is of type Recipe and holds array
  ngOnInit() {
  }

}
