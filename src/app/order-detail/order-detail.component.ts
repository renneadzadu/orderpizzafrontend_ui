import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  pizza = new Pizza(); /// need a pizza object
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
  
    viewPizzaButton(){
        this.pizzaService.viewPizza(this.id, this.pizza).subscribe(
          data =>{
            this.router.navigate(['orders']);
          },
          error => console.log(error)
        );
    }

}
