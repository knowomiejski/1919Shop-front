import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthenticationModule} from './body/authentication/authentication.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './body/nav/nav.component';
import { BodyComponent } from './body/body.component';
import {RouterModule, Routes} from '@angular/router';
import { CartComponent } from './body/cart/cart.component';
import { ItemlistComponent } from './body/itemlist/itemlist.component';
import {FormsModule} from '@angular/forms';
import {ItemComponent} from './body/itemlist/item/item.component';
import {SearchService} from './services/search.service';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'shop', component: ItemlistComponent},
  {path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    ItemComponent,
    ItemlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthenticationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
