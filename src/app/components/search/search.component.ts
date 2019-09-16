import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public historyList:any=["外套","饼干"];
  public searchValue:string;
  constructor() { }

  ngOnInit() {
  }
  search(){
    console.log(this.searchValue);
    if(this.searchValue!=undefined&&this.searchValue!=""){
      var flag:boolean=false;
      // for( var i:number=0,count:number=this.historyList.length;i<count; i++){
      //     var historyValue = this.historyList[i];
      //     if(this.searchValue=historyValue){
      //       flag = true;
      //       break;
      //     }
         
      // }
      if(this.historyList.indexOf(this.searchValue)==-1){
        this.historyList.push(this.searchValue);
      
      }
      this.searchValue="";
    }
  }
  del(index){
    console.log(index);
    this.historyList.splice(index,1);
    // if(value!=undefined && value==""){
    //   for(var i:number=0,count=this.historyList.length;i<count;i++){
    //     if(value == this.historyList[i]){
    //       this.historyList.del(value);
    //     }
    //   }
    // }
  }
}
