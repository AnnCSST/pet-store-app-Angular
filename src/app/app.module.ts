import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    HeaderComponent,
    AboutComponent,
    CatalogoComponent,
    LoginComponent,

   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

