import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/card/footer/footer.component';
import { FormatProductNumberPipe } from './pipes/format-product-number.pipe';



@NgModule({
  declarations: [
    SideNavComponent,
    CardComponent,
    FooterComponent,
    FormatProductNumberPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    SideNavComponent,
    CardComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
