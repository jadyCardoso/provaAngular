import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlocksComponent } from './components/blocks/blocks.component'; 
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';
import { IndexComponent } from './components/index/index.component';
import { PricingComponent } from './components/pricing/pricing.component';

 const routes: Routes = [
  {
      path: '',
      component: IndexComponent,
  },
  {
      path: 'blocks',
      component: BlocksComponent
  },
  {
      path: 'cards',
      component: CardsComponent,
  },
  {
      path: 'forms',
      component: FormsComponent
  },
  {
      path: 'pricing',
      component: PricingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule { }