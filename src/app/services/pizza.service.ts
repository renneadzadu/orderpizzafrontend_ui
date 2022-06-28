import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  getAllPizzas(): Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`http://localhost:8080/orders`);
  }
  
  
  addPizza(pizza: Pizza){
     return this.httpClient.post<Pizza>(`http://localhost:8080/orders`, pizza);
  }
  
  deletePizzaById(id: number){
    return this.httpClient.delete<Pizza>(`http://localhost:8080/orders/${id}`);
  }
  
  //get by id
  
  //edit
  updatePizza(id:any, pizza:Pizza): Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8080/orders/${id}`, pizza);
  
  }
  
  getPizzaById(id: any): Observable<any>{
    return this.httpClient.get<Pizza>(`http://localhost:8080/orders/${id}`);
  }
  
  viewPizza(id:any, pizza: Pizza): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/orders/${id}`, pizza); 
  }
}
