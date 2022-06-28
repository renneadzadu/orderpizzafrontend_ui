import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

   
pizza = new Pizza();
id: any;

  constructor(private pizzaService: PizzaService, private router: Router, private actiavtedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actiavtedRoute.snapshot.params[`id`]; // id in the url

    this.pizzaService.getPizzaById(this.id).subscribe(
      data =>{
        this.pizza = data;
      }
    );
    
  }

  editPizzaButton(){
      this.pizzaService.updatePizza(this.id, this.pizza).subscribe(
        data =>{
          this.router.navigate(['orders']);
        },
        error => console.log(error)
      );
  }

}
