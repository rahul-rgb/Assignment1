import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OnlineShopComponent]
})
export class AppModule { }
