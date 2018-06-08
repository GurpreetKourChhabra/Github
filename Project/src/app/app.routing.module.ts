import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard';

// import { AuthGuard } from './auth.guard.service';
const routes: Routes = [
    { path: '' , redirectTo: 'home' , pathMatch: 'full' },
    { path: 'home' , component: HomeComponent, children:[
        { path: '' , component: LoginComponent }
    ]},
    { path: 'search' , component: SearchComponent , canActivate:[AuthGuard]},
    { path: '**' , redirectTo: 'home' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
