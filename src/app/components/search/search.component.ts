import { Component, OnInit } from '@angular/core';
import {StoreageService} from '../../services/storeage.service';

/*
不推荐
var storeage = new StoreageService();
constructor() { 
  storeage.get();
  console.log(storeage);
}
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public historyList:any[]=[];
  public searchValue:string;

  constructor(public storeage:StoreageService) { 
    
  }

  ngOnInit() {
    console.log("页面刷新初始化数据！");
    var searchList:any = this.storeage.get("historyList");
    if(searchList){
      this.historyList=searchList;
    }
    this.historyList
  }
  search(){
    console.log(this.searchValue);
    if(this.searchValue!=undefined&&this.searchValue!=""){
      var flag:boolean=false;
      if(this.historyList==null){
        this.historyList.push(this.searchValue);
        //持久化到localStortage
        this.storeage.set("historyList",this.historyList);
      }else{
        if(this.historyList.indexOf(this.searchValue)==-1){
          this.historyList.push(this.searchValue);
          //持久化到localStortage
          this.storeage.set("historyList",this.historyList);
        }
      }
      this.searchValue="";
    }
  }
  del(index){
    console.log(index);
    this.historyList.splice(index,1);
    this.storeage.set("historyList",this.historyList);
    // if(value!=undefined && value==""){
    //   for(var i:number=0,count=this.historyList.length;i<count;i++){
    //     if(value == this.historyList[i]){
    //       this.historyList.del(value);
    //     }
    //   }
    // }
  }
}
