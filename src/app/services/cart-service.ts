import { Service } from '@angular/core';

@Service()
export class CartService {
    cart : any[] = [];

    addToCart(product: any){
        this.cart.push(product)
        console.log(this.cart);
    }
}
