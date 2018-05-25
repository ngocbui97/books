import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NextComponent } from './next/next.component';
import { ProductComponent } from './product/product.component';
import{FormsModule} from '@angular/forms'
import{ProductService} from './services/product.service'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    NextComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
