import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { ProductPageComponent } from './components/client/product-page/product-page.component';
import { ProductDetailComponent } from './components/client/product-detail/product-detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LayoutClientComponent } from './components/layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layout/layout-admin/layout-admin.component';
import { ListUserComponent } from './components/admin/userManager/list-user/list-user.component';
import { EditUserComponent } from './components/admin/userManager/edit-user/edit-user.component';
import { ListBrandComponent } from './components/admin/brandManager/list-brand/list-brand.component';
import { AddBrandComponent } from './components/admin/brandManager/add-brand/add-brand.component';
import { EditBrandComponent } from './components/admin/brandManager/edit-brand/edit-brand.component';
import { EditProductComponent } from './components/admin/productManager/edit-product/edit-product.component';
import { AddProductComponent } from './components/admin/productManager/add-product/add-product.component';
import { ListProductComponent } from './components/admin/productManager/list-product/list-product.component';
import { SignUpComponent } from './components/client/sign-up/sign-up.component';
import { SignInComponent } from './components/client/sign-in/sign-in.component';
import { CartPageComponent } from './components/client/cart-page/cart-page.component'; 
import { BrandPageComponent } from './components/client/brand-page/brand-page.component';
import { LayoutProductComponent } from './components/layout/layout-product/layout-product.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  {
    path: "", component: LayoutClientComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "product", component: LayoutProductComponent },
      { path: "brand", component: BrandPageComponent },
      { path: "cart", component: CartPageComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "user", component: SignInComponent },
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, canActivate: [authGuard], children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ListProductComponent },
      { path: "product/add", component: AddProductComponent },
      { path: "product/:id/edit", component: EditProductComponent },

      // 
      { path: "brand", component: ListBrandComponent },
      { path: "brand/add", component: AddBrandComponent },
      { path: "brand/:id/edit", component: EditBrandComponent },

      // user
      { path: "user", component: ListUserComponent },
      { path: "user/:id/edit", component: EditUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
