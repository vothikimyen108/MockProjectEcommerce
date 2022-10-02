import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductlistService } from '../productlist/productlist.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  categories: string[] = [];
  sub!: Subscription;
  errorMessage = '';
  constructor(private productService: ProductlistService ) {}

  ngOnInit(): void {
    this.sub = this.productService.getCategories().subscribe({
      next: ( categories) => {
        this.categories =  categories;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

}
