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
import { AdminComponent } from './shared/components/admin/admin.component';
import { userRoleGaurd as userRoleGuard } from './shared/services/user-role.gaurd';
import { SuperAdminsComponent } from './shared/components/super-admins/super-admins.component';
import { ProductsResolverService } from './shared/services/products-resolver.service';
import { UserResolverService } from './shared/services/user-resolver.service';
import { CanDectivateGuard } from './shared/services/can-dectivate.guard';

const routes: Routes = [
  {
    path : "", component : AuthComponent
  },
  {
    path : "home", component : DashBoaredComponent,
    title: "Home",
    // canActivate :[AuthGard],
  },
  {
    path : "users", component : UsersComponent,
    title : "Users",
    canActivate :[AuthGard],
    canActivateChild : [AuthGard],
    children :[
      {
        path : "addUser", component : EditUserComponent 
      },
      {
        path : ":userId", component : UserComponent,
        resolve : {user : UserResolverService}
      },
      {
        path : ":userId/editUser" , component : EditUserComponent,
        canDeactivate : [CanDectivateGuard]
      }
    ]
  },
  {
    path : "products",component : ProductsComponent,
    title : "Products",
    canActivate :[AuthGard],
    canActivateChild : [AuthGard],
    children :[
      {
        path : "addProd",component : EditProductComponent
      },
      {
        path : ":productId", component : ProductComponent,
        resolve : {product : ProductsResolverService}
      },
      {
        path : ":productId/editProduct", component : EditProductComponent,
        canDeactivate : [CanDectivateGuard]
      }
    ]
  },
  {
    path : "admin", component : AdminComponent,
    title : "Admin",
    canActivate :[AuthGard, userRoleGuard],
    data : {
      userRole : ["admin","superAdmin"],
    }
  },
  {
    path : "superAdmin", component : SuperAdminsComponent,
    title : "superAdmin",
    canActivate :[AuthGard, userRoleGuard],
    data : {
      userRole : ["superAdmin"],
    }
  },
  {
    path : "pageNotFound", component : PageNotFoundComponent,
    data : {
      msg : "Page Not Found"
    }
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
