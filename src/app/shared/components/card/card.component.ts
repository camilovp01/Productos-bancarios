import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MapTextService } from '../../services/map-text/map-text.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: any;

  constructor(public _mapTextService: MapTextService) { }

  ngOnInit() {
  }

}
