import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { PaymentsComponent } from './payments/payments.component';



const pagesRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent, data: { titulo: 'Productos' }
  },
  {
    path: 'organizer',
    component: OrganizerComponent, data: { titulo: 'Tu Organizador' }
  },
  {
    path: 'payments',
    component: PaymentsComponent, data: { titulo: 'Productos' }
  },
  { path: '', redirectTo: 'products', pathMatch: 'Pagos' }

];


@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
