import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRountingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlocksComponent } from './components/blocks/blocks.component'; 
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';
import { IndexComponent } from './components/index/index.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    CardsComponent,
    FormsComponent,
    IndexComponent,
    PricingComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
