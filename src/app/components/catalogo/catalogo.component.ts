import { Component, OnInit } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})


export class CatalogoComponent implements OnInit {
  public products: any[] = [];

  constructor(
    private apiService: ApiService, // Primer servicio
    private cartServicesService: CartServicesService // Segundo servicio
  ) {}
  
  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  
 
  addToCart(product: any) {
    this.cartServicesService.addToCart(product);
    console.log(this.cartServicesService.getCart());
  }
  
}

