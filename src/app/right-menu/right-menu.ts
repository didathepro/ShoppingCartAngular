import { Component, inject } from '@angular/core';
import { Product } from '../services/product';
import { CategoryService } from '../services/category';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-right-menu',
  imports: [],
  templateUrl: './right-menu.html',
  styleUrl: './right-menu.css'
})
export class RightMenu {
  cartService = inject(CartService);
  productService = inject(Product);
  categoryService = inject(CategoryService);

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }
  
//Filter items for selected category
  get filteredProducts() {

    const category = this.categoryService.selectedCategory();

    if (category === 'all') {
      return this.productService.products;
    }

    return this.productService.products.filter(
      product => product.category === category
    );
  }
}