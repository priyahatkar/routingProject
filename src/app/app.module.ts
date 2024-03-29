import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoaredComponent } from './shared/components/dash-boared/dash-boared.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuperAdminsComponent } from './shared/components/super-admins/super-admins.component'
import { BlockCopyPasteDirective } from './shared/directive/priventCopyPaste';


@NgModule({
  declarations: [
    AppComponent,
    DashBoaredComponent,
    UsersComponent,
    ProductsComponent,
    PageNotFoundComponent,
    UserComponent,
    ProductComponent,
    NavBarComponent,
    EditUserComponent,
    EditProductComponent,
    AuthComponent,
    AdminComponent,
    SuperAdminsComponent,
    BlockCopyPasteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
