import { Component, OnInit ,Input ,EventEmitter,Output} from '@angular/core';

import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Input() id:number;
    // @Output() recipeSelected = new EventEmitter<void>();
//   constructor(private recipeService : RecipeService) {
// }
  ngOnInit() {
  }
  // onSelected() {
  //     this.recipeService.recipeSelected.emit(this.recipe);
  //     // this.recipeSelected.emit();
  // }

}