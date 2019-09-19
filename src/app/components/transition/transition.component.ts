import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pull(){
    var asideDom = document.getElementById("aside");
    asideDom.style.transform="translate(0,0)";
  }
  push(){
    var asideDom = document.getElementById("aside");
    asideDom.style.transform="translate(100%,0)"
  }
}
