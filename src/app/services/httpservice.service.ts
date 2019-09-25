import { Injectable } from '@angular/core';
import axios from 'axios';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet(api){
    return Promise((resolve)=>{
      axios.get(api)
      .then(function (response) {
        // handle success
        console.log(response);
      });
    })

  }
}
