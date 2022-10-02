import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCateComponent } from './product-cate/product-cate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavLeftComponent,
    MainContentComponent,
    ProductComponent,
    ProductlistComponent,
    ProductCateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: ProductlistComponent },
      { path: 'product/categorie/:name', component: ProductCateComponent },
    // //   {
    // //     path: 'product/:id', // khai báo router này để lấy id từ trên router
    // //     component: ProductDetailsComponent
    // // },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
