import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/data.json');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>('/data.json').pipe(
      map((products) => products.find((p) => p.id === id)!)
    );
  }
}