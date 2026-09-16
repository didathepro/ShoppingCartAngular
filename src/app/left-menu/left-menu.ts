import { Component, inject } from '@angular/core';
import {CategoryService} from '../services/category'

@Component({
  imports: [],
  selector: 'app-left-menu',
  styleUrl: './left-menu.css',
  templateUrl: './left-menu.html',
})
export class LeftMenu {
  categoryService=inject(CategoryService);
}
