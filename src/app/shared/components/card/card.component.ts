import { Component, OnInit, Input } from '@angular/core';
import { MapTextService } from '../../services/map-text/map-text.service';
import { MatDialog } from '@angular/material';
import { DetailComponent } from 'src/app/pages/products/detail/detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: any;
  @Input() productType: any;
  @Input() totalProduct: number;
  @Input() index: number;
  image: string;

  constructor(public _mapTextService: MapTextService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getImage();
  }

  openDialog(product: any): void {
    this.dialog.open(DetailComponent, {
      width: '400px',
      data: { product }
    });
  }

  getImage() {
    let firstNumber = this.product.id[0];
    if (this.productType === 'CREDIT_CARD') {
      switch (firstNumber) {
        case '4':
          return this.image = 'assets/images/logo-visa.png';
        case '5':
          return this.image = 'assets/images/logo-mastercard.png';
        default:
          return this.image = 'assets/images/default.png';
      }
    } else {
      return this.image = 'assets/images/default.png';
    }
  }

}
