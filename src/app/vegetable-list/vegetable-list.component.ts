
import { Component, OnInit } from '@angular/core';

import { IVegetable } from "./ivegetable";

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})

//  Vegetable List
//  Lists the vegetables that the user can click on 
export class VegetableListComponent implements OnInit {

  title:string = "Vegetable List";

  //  The list of veggies
  vegetableList:IVegetable[] = [
    {
      id: 1,
      name: "Potato"
    },
    {
      id: 2,
      name: "Carrot"
    },
    {
      id: 3,
      name: "Beetroot"
    },
    {
      id: 4,
      name: "Cabbage"
    },
    {
      id: 5,
      name: "Parsnip"
    }
  ];
  
  constructor() {  }

  ngOnInit(): void {
  }

}
