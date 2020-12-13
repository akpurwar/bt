import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Admin/category.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.scss']
})
export class DisplayCategoryComponent implements OnInit {
  categoryName : any;
  //filterCategory:any;
  constructor(private displayQuizService:CategoryService) { 

  }

  ngOnInit(): void {
    this.getCategoryName();
  }

  getCategoryName() {
    return this.displayQuizService. getCategoryName()
      .subscribe(
        que =>{
          this.categoryName = que;
          console.log( this.categoryName);
        } 
    );
  }

}
