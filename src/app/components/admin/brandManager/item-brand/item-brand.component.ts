import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-item-brand]',
  templateUrl: './item-brand.component.html',
  styleUrls: ['./item-brand.component.css']
})
export class ItemBrandComponent {
  @Input() brand: any
  @Input() index: any
}
