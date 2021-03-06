import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute , Params} from '@angular/router';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe:Recipe;
    id: number;
    // @Input() num: number;
  constructor(private recipeService:RecipeService,
  private route: ActivatedRoute ) { }
  ngOnInit() {
     this.route.params
     .subscribe(
         (params:Params)=>{
             this.id = +params['id'];
             this.recipe = this.recipeService.getRecipeById(this.id);
     });
  }
  OnAddToShoppingList() {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
