import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardCreateComponent } from './components/credit-card-create/credit-card-create.component';

const routes: Routes = [
  { path: 'create-credit-card', component: CreditCardCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
