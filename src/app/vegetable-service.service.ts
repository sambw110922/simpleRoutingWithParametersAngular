import { Injectable } from '@angular/core';

import { IVegetableViewer } from './ivegetableviewer';

@Injectable({
  providedIn: 'root'
})

export class VegetableServiceService {

  //  Vegetable list
  vegetableList:IVegetableViewer[] = [
    {
      id: 1,
      name: "Potato",
      description: "blah"
    },
    {
      id: 2,
      name: "Carrot",
      description: "blah"
    },
    {
      id: 3,
      name: "Beetroot",
      description: "blah"
    },
    {
      id: 4,
      name: "Cabbage",
      description: "blah"
    },
    {
      id: 5,
      name: "Parsnip",
      description: "blah"
    }
  ];
  

  constructor() { }

  //  Finds a vegetable
  findAVegetable(id:number):IVegetableViewer{

    //  The vegetable viewer object to return
    var vvToReturn:IVegetableViewer = {
      id: 0,
      name: "default",
      description: "default"
    };

    for(let vegetable of this.vegetableList){
      
      if(id == vegetable.id){
        vvToReturn = vegetable;
        break;
      }

    }


    return vvToReturn;
  }

}
