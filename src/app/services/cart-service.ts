import { Service, signal } from '@angular/core';

@Service()
export class CartService {
    cart = signal<any[]>([]);

addToCart(product: any) {

    const existingProduct = this.cart().find(item => item.id === product.id);

    if (existingProduct) {

        this.cart.update(cart =>
            cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );

    } else {

        this.cart.update(cart => [
            ...cart,
            { ...product, quantity: 1 }
        ]);

    }
}

quantityPlus(id: number) {
    this.cart.update(cart =>
        cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    );
}

quantityMinus(id: number) {
    this.cart.update(cart =>
        cart
            .map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0)
    );
}

cartTotal() {
    let total = 0;

    for (const item of this.cart()) {
        total += item.price * item.quantity;
    }

    console.log(total.toFixed(2));
    return total;
}
}
