import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SideNavService } from '../../services/side-nav/side-nav.service';



/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url: node.url
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private _sideNavService: SideNavService) {
    this.dataSource.data = this._sideNavService.menu;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
