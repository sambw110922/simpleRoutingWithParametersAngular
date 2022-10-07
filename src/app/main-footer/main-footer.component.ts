import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})

export class MainFooterComponent implements OnInit {

  //  The current date
  someDate:number = 2022;

  constructor() { }

  ngOnInit(): void {
  }

}
