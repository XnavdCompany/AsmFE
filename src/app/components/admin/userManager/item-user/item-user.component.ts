import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-item-user]',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.css']
})
export class ItemUserComponent {
  @Input() user: any;
  @Input() index: any;

  @Output() onRemove: EventEmitter<any> = new EventEmitter()
  removeUser(id: any) {
    this.onRemove.emit(id)
  }
}
