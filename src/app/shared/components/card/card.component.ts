import { Component, OnInit, Input } from '@angular/core';
import { MapTextService } from '../../services/map-text/map-text.service';

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

  constructor(public _mapTextService: MapTextService) { }

  ngOnInit() {
  }

}
