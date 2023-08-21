import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
sort = 'desc'
  itemsShowCount: number = 12;

  onSortUpdated(newSort: string): void {
  this.sort = newSort
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
}
