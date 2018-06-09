import {Component,Input,OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
    selector: 'app-recipe',
    templateUrl: 'recipe.component.html',
    providers: [RecipeService]
})
export class RecipeComponent implements OnInit{
     // @Input() element:{name:string,val:number};
     selectedRecipe: Recipe;
     name: any = '';
     constructor(private recipeService : RecipeService){
     }
     ngOnInit() {
         this.recipeService.recipeSelected
         .subscribe(
             (recipe:Recipe) => {
                 this.selectedRecipe = recipe;
             }
         );
     }
}
