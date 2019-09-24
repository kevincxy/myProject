import { Component, OnInit,ViewChild } from '@angular/core';

import { AsynchronousService } from '../../services/asynchronous.service';
import { filter } from 'minimatch';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
public title:string= "首页组件title";
//获取子组件的实体
@ViewChild("header",{static:true}) header:any;

  constructor(public request:AsynchronousService) { }

  ngOnInit() {
    //1.同步
    let data= this.request.getData();
    console.log(data);

    //2.异步
    let data1= this.request.requestBack((data)=>{
      console.log(data);
    });
    //3.promise获取异步数据
    let promiseDate = this.request.getPromiseDate();
    promiseDate.then((data)=>{
      console.log(data);
    });
    //4.获取异步数据
    let rxjsData = this.request.getRxjsData();
    let rd=  rxjsData.subscribe((data)=>{
      console.log(data);
    });
    
    // setTimeout(()=>{
    //   rd.unsubscribe();
    // },1000);

    //5.promise的Interval获取异步数据(不成功)
    let promiseIntervalDate = this.request.getRxjsIntervalData();
    promiseDate.then((data)=>{
      console.log(data);
    });
    //6.获取rxjs的inter
    // let rxjsIntervalData = this.request.getRxjsIntervalData();
    // let rdIntval =  rxjsIntervalData.subscribe((data)=>{
    //   console.log(data);
    // });

    //7.获取rxjs的inter
    // var numSer = this.request.getRxjsIntervalNum();
    //  numSer.pipe(
    //    filter((val:number)=>{
    //      if(val%2==0){
    //        return val;
    //      }
    //     })
    //  )
    //  .subscribe((data:number)=>{
    //   console.log(data);
    // });

    
  }

  check(e){
    alert(e);
    alert("我是父组件里的check方法！");
  }
  //获取子组件的msg值
  getChildMsg(){
    console.log(this.header.msg);
  }
  //执行子组件方法
  execChildRun(){
    this.header.run();
  }
   

}
