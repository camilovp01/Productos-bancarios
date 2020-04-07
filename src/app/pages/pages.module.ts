import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrganizerComponent } from './organizer/organizer.component';
import { PaymentsComponent } from './payments/payments.component';



@NgModule({
  declarations: [
    ProductsComponent,
    OrganizerComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
