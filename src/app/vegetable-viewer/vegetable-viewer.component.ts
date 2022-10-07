import { Component, OnInit } from '@angular/core';

//  Gets activated route
import { ActivatedRoute } from '@angular/router';

//  Need IVegetable
import { IVegetable } from '../vegetable-list/ivegetable';

import { IVegetableViewer } from '../ivegetableviewer';

import { VegetableServiceService } from '../vegetable-service.service';

@Component({
  selector: 'app-vegetable-viewer',
  templateUrl: './vegetable-viewer.component.html',
  styleUrls: ['./vegetable-viewer.component.css'],
  providers:[
    VegetableServiceService
  ]
})

//  The vegetable viewer
export class VegetableViewerComponent implements OnInit {


  vegetableName:string = "DEFAULT";
  vegetableID:number = 0;
  vegetableDescription = "DEFAULT";

  vegetableQuery:IVegetable | undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    var routeParams = this.route.snapshot.paramMap;
    var vegetableID = routeParams.get("id");
    
    if(vegetableID){

      var veggieService = new VegetableServiceService();
      
      var vegetableView:IVegetableViewer = veggieService.findAVegetable(parseInt(vegetableID));
      
      this.vegetableName = vegetableView.name;
      this.vegetableID = vegetableView.id;
      this.vegetableDescription = vegetableView.description;

    }
    

  }


}
