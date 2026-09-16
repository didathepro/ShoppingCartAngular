import { Service } from '@angular/core';

@Service()
export class Product {
    products = [
  {
    id: 1,
    name: 'Cheeseburger',
    category:'burger',
    description: 'Juicy beef burger with cheese, lettuce and tomato',
    price: 9.99,
    image: 'cheeseburger.jpg'
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    category:'pizza',
    description: 'Classic pizza with tomato, mozzarella and basil',
    price: 11.50,
    image: 'margherita.jpg'
  },
  {
    id: 3,
    name: 'Chicken Wrap',
    category:'chicken',
    description: 'Grilled chicken with lettuce, tomato and sauce',
    price: 8.90,
    image: 'chicken-wrap.jpg'
  },
  {
    id: 4,
    name: 'French Fries',
    category:'burger',
    description: 'Crispy golden fries with a pinch of salt',
    price: 3.50,
    image: 'fries.jpg'
  },
  {
    id: 5,
    name: 'Pepperoni Pizza',
    category:'pizza',
    description: 'Pizza with tomato sauce, mozzarella and pepperoni',
    price: 12.90,
    image: 'pepperoni.jpg'
  },
  {
    id: 6,
    name: 'Chicken Nuggets',
    category:'chicken',
    description: 'Crispy chicken nuggets served with dipping sauce',
    price: 6.90,
    image: 'nuggets.jpg'
  },
  {
    id: 7,
    name: 'Caesar Salad',
    category:'chicken',
    description: 'Fresh lettuce, chicken, parmesan and Caesar dressing',
    price: 8.50,
    image: 'caesar-salad.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Cake',
    category:'dessert',
    description: 'Soft chocolate cake with creamy chocolate topping',
    price: 5.90,
    image: 'chocolate-cake.jpg'
  }
];
}
