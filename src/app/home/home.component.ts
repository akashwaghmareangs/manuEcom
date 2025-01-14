import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { GetDataService } from '../service/get-data.service';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  bannerImg = [
    {
      id:1,
      img:'htts://images.all-free-download.com/images/graphiclarge/ecommerce_website_banner_template_customers_sketch_flat_design_6920122.jpg'
      
    },
    {
 id:2,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnIhDH4rMdL8W7OdxMytYs3H3vMRYtp3qRQ&s'
    },
    {
 id:3,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqq1rsdIZ5-AzNy7-WjRV0QtNUyB25UHZLkQ&s'
    },
  ];

  getCategoriesData:any;
  constructor(private getData:GetDataService){

  }
  ngOnInit(): void {
   this.getCategoriesData = this.getData.categoriesData;
  }


  
}
