import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { LeftMenu } from './left-menu/left-menu';
import {RightMenu} from './right-menu/right-menu';
import { CartSidebar } from './cart-sidebar/cart-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LeftMenu, RightMenu, CartSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShoppingCart');
}
