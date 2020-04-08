import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductsState } from 'src/app/redux/reducers/products.reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  product: any;
  labels: Array<string>;
  values: Array<any>;

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
    this.product = this.data.product;
    this.labels = this.product.productAccountBalances && Object.keys(this.product.productAccountBalances);
    this.values = this.product.productAccountBalances && Object.values(this.product.productAccountBalances);
    console.log(this.product, this.labels, this.values);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
