import { environment as env } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { ShoppingListComponent } from './components/pages/shopping-list/shopping-list.component';

// it all uses values from `environment` because of i18n of route paths here and in template links
const routes: Routes = [
  { path: "", redirectTo: env.routePath.recipes, pathMatch: "full" },
  { path: env.routePath.recipes, component: RecipesComponent },
  { path: env.routePath.auth, component: AuthComponent },
  { path: env.routePath.shoppingList.default, component: ShoppingListComponent },
  { path: env.routePath.shoppingList.variant1, redirectTo: env.routePath.shoppingList.default },
  { path: env.routePath.shoppingList.variant2, redirectTo: env.routePath.shoppingList.default },
  { path: "**", redirectTo: env.routePath.recipes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
