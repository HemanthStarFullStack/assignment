// user-component.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './user-component.data.service';

@Component({
  selector: 'app-user-component',
  standalone: true,  // This is not a standard Angular property, check if it's specific to your project
  // imports: [],    // This is not a standard Angular property
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.fetchData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Request completed successfully.');
      }
    );
  }
}
