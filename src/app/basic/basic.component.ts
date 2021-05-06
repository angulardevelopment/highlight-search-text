import { Component, OnInit } from '@angular/core';
import * as Mark from 'mark.js';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],

})
export class BasicComponent {

  toBeFiltered: string = "Some larger text to be filtered, you can enter any string to see the highlight.";
  filterString: string = "";
  plunkerTitle;
  constructor() {
    this.plunkerTitle = 'HighlightPipe example'
    var context = <HTMLElement>(document.querySelector(".context")); // requires an element with class "context" to exist
    var instance = new Mark(context);
    instance.mark('test'); // will mark the keyword

  }

  ngAfterViewInit() {


  }

}
