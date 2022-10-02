import { Component, OnInit } from '@angular/core';
import { Product } from '../type/product';
import { ProductlistService } from './productlist.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products : Product[] = []
  sub!: Subscription;
  errorMessage = '';
  constructor(private productService: ProductlistService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProductAll().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

}
