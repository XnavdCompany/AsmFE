import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'tr[app-item-product]',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent {
  @Input() product: any
  @Input() index: any

  @Output() onRemove: EventEmitter<any> = new EventEmitter()
  removeProduct(id: any) {
    this.onRemove.emit(id)
  }
}
