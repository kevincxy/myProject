import { Injectable } from '@angular/core';
import { Promise } from 'q';
import {Observable, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AsynchronousService {

  constructor() { }
  /**
   * 同步和异步调用
   */
  //1.同步方法
  getData(){
    return "this is a service data";
  }
  //异步
  //2.传callback方法
  requestBack(cb){
    let username:string;
    setTimeout((username) => {
        username = "Murongtianyu";
        cb(username);
    }, 1000);
    return username;
  }
  //3.promise回调方法
  getPromiseDate(){
   return Promise((resolve)=>{
      setTimeout(() => {
        let username="murong--promise";
        resolve(username);
      },2000);
    });
  }
  //4.Rxjs回调方法
  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        let username = "murong--rxjs";
        observer.next(username);
        //错误返回
        // observer.error("错误数据");
      },3000);
    
    });
  }
  //5.Promise 
  getpromiseInterval(){
    return Promise((resolve)=>{
      setInterval(() => {
        let username="murong--promise--interval";
        resolve(username);
      },1000);
    });
  }
   //6.Rxjs回调方法
   getRxjsIntervalData(){
     var count:number=1;
    return new Observable((observer)=>{
     
      setInterval(()=>{
        count++;
        let username = "murong--rxjs--interval"+count;
        observer.next(username);
        //错误返回
        // observer.error("错误数据");
      },1000);
    
    });
  }

  //7.filter例子
  getRxjsIntervalNum(){
   var count:number=1;
   return new Observable((observer)=>{
    
     setInterval(()=>{
       count++;
       observer.next(count);
       //错误返回
       // observer.error("错误数据");
     },1000);
   
   });
 }
}

