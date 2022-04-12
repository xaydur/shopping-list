import { Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: "manzana",
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "pan",
      price: 3.5,
      quantity: 8,
      completed: true
    },  
    {
      id: 2,
      title: "leche",
      price: 5.3,
      quantity: 2,
      completed: false
    }  
  ];

  constructor() { }

  getItems(){
    return this.items; 
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
