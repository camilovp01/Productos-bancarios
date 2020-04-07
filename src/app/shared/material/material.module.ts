import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatTreeModule, MatIconModule, MatCardModule, MatProgressBarModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
