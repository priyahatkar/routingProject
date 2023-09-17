import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoaredComponent } from './shared/components/dash-boared/dash-boared.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { AuthGard } from './shared/services/auth.gaurd';
import { AuthComponent } from './shared/components/auth/auth.component';

const routes: Routes = [
  {
    path : "", component : AuthComponent
  },
  {
    path : "dashboard", component : DashBoaredComponent,
    canActivate :[AuthGard],
  },
  {
    path : "users", component : UsersComponent,
    canActivate :[AuthGard],
    canActivateChild : [AuthGard],
    children :[
      {
        path : "addUser", component : EditUserComponent 
      },
      {
        path : ":userId", component : UserComponent
      },
      {
        path : ":userId/editUser" , component : EditUserComponent
      }
    ]
  },
  {
    path : "products",component : ProductsComponent,
    canActivate :[AuthGard],
    canActivateChild : [AuthGard],
    children :[
      {
        path : "addProd",component : EditProductComponent
      },
      {
        path : ":productId", component : ProductComponent
      },
      {
        path : ":productId/editProduct", component : EditProductComponent
      }
    ]
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
