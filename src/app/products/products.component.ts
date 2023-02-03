import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  searchItem: string = '';
  tempProducts: Object = {};
  public produtsData: any;
  constructor(private serviceData: DataService) {}
  ngOnInit(): void {
    this.serviceData.getData().subscribe((data) => {
      this.produtsData = data;
      this.tempProducts = data;
    });
  }
  getId(id: number): void {
    this.serviceData.getId(id);
  }

  //filter items
  filter(category: string) {
    if (this.produtsData.length > 0 && category != 'all') {
      console.log(this.produtsData);
      this.produtsData = this.tempProducts;
      let filteredProducts = this.produtsData.filter((product: any) => {
        return product.category === category;
      });

      this.produtsData = filteredProducts;
    } else {
      this.serviceData.getData().subscribe((data) => {
        this.produtsData = data;
      });
    }
  }
}
