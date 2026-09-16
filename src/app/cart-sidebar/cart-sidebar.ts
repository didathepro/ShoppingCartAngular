import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart-sidebar',
  styleUrl: './cart-sidebar.css',
  templateUrl: './cart-sidebar.html',
})
export class CartSidebar {
  selectedOption = signal<'delivery' | 'collection'>('delivery');

  selectDelivery() {
  this.selectedOption.set('delivery');
}

selectCollection() {
  this.selectedOption.set('collection');
}
}
