import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrganizerComponent } from './organizer/organizer.component';
import { PaymentsComponent } from './payments/payments.component';
import { DetailComponent } from './products/detail/detail.component';



@NgModule({
  declarations: [
    ProductsComponent,
    OrganizerComponent,
    PaymentsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DetailComponent
  ],
})
export class PagesModule { }
