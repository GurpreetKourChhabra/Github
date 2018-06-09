import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
    {path: '' , redirectTo: '/recipe' , pathMatch: 'full'},
    { path: 'recipe' , component: RecipeComponent , children: [
        {path: '' , component: RecipeStartComponent },
        {path: ':id' , component: RecipeDetailComponent }
    ] },
    { path: 'shopping-list' , component: ShoppingListComponent },
    {path: 'signup' , component: SignupComponent},
    {path: 'signin' , component: SigninComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes , {useHash:true})
    ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {

}
