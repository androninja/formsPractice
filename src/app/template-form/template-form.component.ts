import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public product! :Product;
  constructor() { }

  ngOnInit(): void {
    //new product object
    this.product= new Product({
      id:"",name:"",manuDate:"",expDate:"",price:0
    });
  }

}
