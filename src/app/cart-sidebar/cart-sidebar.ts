import { Component, signal, inject, computed } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  imports: [],
  selector: 'app-cart-sidebar',
  styleUrl: './cart-sidebar.css',
  templateUrl: './cart-sidebar.html',
})
export class CartSidebar {
  cartArray= inject(CartService);
  cartFee = computed(() =>
  Math.min(this.cartArray.cartTotal() * 0.025, 0.89)
);

  cartTotal = computed(() => 
    this.cartArray.cartTotal() + this.cartFee()
  );

  selectedOption = signal<'delivery' | 'collection'>('delivery');

  selectDelivery() {
  this.selectedOption.set('delivery');
}

selectCollection() {
  this.selectedOption.set('collection');
}

quantityPlus(id: number) {
    this.cartArray.quantityPlus(id);
}

quantityMinus(id: number) {
    this.cartArray.quantityMinus(id);
}

}
