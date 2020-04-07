import { Component, OnInit, Input } from '@angular/core';
import { MapTextService } from 'src/app/shared/services/map-text/map-text.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() product: any;

  constructor(public _mapTextService: MapTextService) { }

  ngOnInit() {
  }

  valueProgress(totalValue: number, debtValue: number) {
    if (debtValue <= 0) {
      return 0;
    }
    let value = ((debtValue * 100) / totalValue);
    return value;
  }

}
