import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  pizzas: Pizza[] = []; //instance variable

  constructor(private pizzaService: PizzaService, private router: Router) { } // constructor

  ngOnInit(): void {
    this.fetchPizzas();
  }


fetchPizzas(){
  this.pizzaService.getAllPizzas().subscribe(
     data => {
      this.pizzas = data;
      console.log(data);
     },
     error => console.log(error)
  );
}

goToEditPizza(id: any){
  this.router.navigate(['editorder', id]);
}



deletePizza(id: any){
  this.pizzaService.deletePizzaById(id).subscribe(
     data =>{
       this.fetchPizzas(); // refreshing the list
       this.router.navigate(['orders']);
     },
     error => console.log(error)
  );
}



goToAddPizza(){
  this.router.navigate(['addorder']);
}



goToViewPizza(id: any){
  this.router.navigate(['vieworder', id]);
}


}
