import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../common/product';
import { ProductlistService } from '../productlist/productlist.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product = {} as Product;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productDetailService: ProductlistService
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.sub = this.productDetailService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/welcome']);
  }
  ngOnDestroy() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }
}
