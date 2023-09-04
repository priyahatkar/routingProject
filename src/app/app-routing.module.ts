import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoaredComponent } from './shared/components/dash-boared/dash-boared.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : "", component : DashBoaredComponent
  },
  {
    path : "dashboard", component : DashBoaredComponent
  },
  {
    path : "users", component : UsersComponent
  },
  {
    path : "users/:userId", component : UserComponent
  },
  {
    path : "products",component : ProductsComponent
  },
  {
    path : "products/:productId", component : ProductComponent
  },
  {
    path : "pageNotFound", component : PageNotFoundComponent
  },
  {
    path : "**", redirectTo:"pageNotFound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
