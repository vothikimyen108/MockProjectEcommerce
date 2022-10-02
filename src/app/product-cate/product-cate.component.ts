import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../common/product';
import { ProductlistService } from '../productlist/productlist.service';

@Component({
  selector: 'app-product-cate',
  templateUrl: './product-cate.component.html',
  styleUrls: ['./product-cate.component.scss'],
})
export class ProductCateComponent implements OnInit {
  pageTitle = 'Product Categories';
  errorMessage = '';
  nameCategories: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const param = this.route.snapshot.paramMap.get('name');
    if (param) {
      this.nameCategories = param;
    }
  }

  onBack(): void {
    this.router.navigate(['/welcome']);
  }
  ngOnDestroy() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }
}
