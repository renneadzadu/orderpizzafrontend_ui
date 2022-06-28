import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {


  pizza = new Pizza(); /// need a pizza object

  constructor(private pizzaService: PizzaService, private router: Router) { }

  ngOnInit(): void {
  }

  submitPizzaButton(){
      this.pizzaService.addPizza(this.pizza).subscribe(
         data => {
          console.log(data);
            this.router.navigate(['orders']);
         }
      );
  }

}
