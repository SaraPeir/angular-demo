import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css']
})
export class WidgetWrapperComponent implements OnInit {
  @Input() title:string;
  @Input() content: any;

  constructor() {
 
   }

  ngOnInit() {
   
  }
}
