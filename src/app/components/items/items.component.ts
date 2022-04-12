import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/item';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();

    this.getTotal();

  }

  deleteItem(item: Item){
    console.log("se ejecuta el deleteItem")
    this.items = this.items.filter( x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                    .filter ( x => !x.completed)
                    .map( x => x.quantity * x.price)
                    .reduce( (acc, item) => acc += item  ,0 );

  }
}
