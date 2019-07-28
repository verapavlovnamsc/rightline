import { Component, OnInit, Input } from '@angular/core';
import { SliderIconData } from '../models/iconTextData';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent implements OnInit {
@Input('inputId') inputId: number;
@Input('data') data: SliderIconData;
  constructor() { }

  ngOnInit() {
  }
  getMyStyles() {
    let myStyles = {
      'background-image': `url(${this.data.iconurl})`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'height': '600px'

    };
    if (this.data!=null){
      return myStyles;
    }
}
}
