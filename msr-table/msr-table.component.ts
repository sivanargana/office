import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table',
  templateUrl: './msr-table.component.html',
  styleUrls: ['./msr-table.component.scss']
})
export class MsrTableComponent implements OnInit {
  @Input() rows:any = [];
  @Input() columns:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  getColumns(columns:any,pinned?:any){
    switch (pinned) {
      case 'left':

      console.log("left");
        
        break;
        case 'right':
          console.log("right")
        
        break;
    
      default:
        console.log("remining")
        break;
    }
    // if(pinned){
    //   console.log(pinned)
    //   return columns.filter((item:any)=>item.pinned == pinned);
    // }else if(pinned == "*"){
    //   console.log(pinned)
    // }
    
    
    

  

   

    return columns;

  }

}
