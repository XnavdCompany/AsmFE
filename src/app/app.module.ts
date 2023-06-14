import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// 
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { ProductPageComponent } from './components/client/product-page/product-page.component';
import { ProductDetailComponent } from './components/client/product-detail/product-detail.component';
import { SignUpComponent } from './components/client/sign-up/sign-up.component';
import { SignInComponent } from './components/client/sign-in/sign-in.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LayoutAdminComponent } from './components/layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './components/layout/layout-client/layout-client.component';
import { AddUserComponent } from './components/admin/userManager/add-user/add-user.component';
import { EditUserComponent } from './components/admin/userManager/edit-user/edit-user.component';
import { ListUserComponent } from './components/admin/userManager/list-user/list-user.component';
import { AddBrandComponent } from './components/admin/brandManager/add-brand/add-brand.component';
import { ListBrandComponent } from './components/admin/brandManager/list-brand/list-brand.component';
import { ItemBrandComponent } from './components/admin/brandManager/item-brand/item-brand.component';
import { EditBrandComponent } from './components/admin/brandManager/edit-brand/edit-brand.component';
import { ItemUserComponent } from './components/admin/userManager/item-user/item-user.component';
import { ListProductComponent } from './components/admin/productManager/list-product/list-product.component';
import { ItemProductComponent } from './components/admin/productManager/item-product/item-product.component';
import { AddProductComponent } from './components/admin/productManager/add-product/add-product.component';
import { EditProductComponent } from './components/admin/productManager/edit-product/edit-product.component';
import { CartPageComponent } from './components/client/cart-page/cart-page.component';
import { BannerComponent } from './components/client/banner/banner.component';
import { BrandPageComponent } from './components/client/brand-page/brand-page.component';
import { LayoutProductComponent } from './components/layout/layout-product/layout-product.component';
import { FooterComponent } from './components/client/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    AddBrandComponent,
    ListBrandComponent,
    ItemBrandComponent,
    EditBrandComponent,
    ItemUserComponent,
    ListProductComponent,
    ItemProductComponent,
    AddProductComponent,
    EditProductComponent,
    BrandPageComponent,
    CartPageComponent,
    BannerComponent,
    LayoutProductComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
