import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PartsComponent } from './components/parts/parts.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    CustomerComponent,
    PartsComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'News',component: NewsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
