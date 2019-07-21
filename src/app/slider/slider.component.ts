import { Component, OnInit } from '@angular/core';
import { SliderIconData } from '../models/iconTextData';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: Array<string>;
  textForImages: Array<string>;
  dataItems: Array<SliderIconData>;
  index: number;
  currentImage: string;
  currentText: string;
  currentSliderIconData: SliderIconData;
  
  constructor() { 
    this.images = new Array<string>();
    this.textForImages = new Array<string>();
    this.currentSliderIconData = new SliderIconData("","", "", -1);
    this.index = 0;
    this.images.push("assets/i/one.png");
    this.images.push("assets/i/two.png");
    this.images.push("assets/i/three.png");
    this.textForImages.push("ytguhnjimk,");
    this.textForImages.push("fvgbhjnkml,;.//'kgvbnhjmk,l.;");
    this.textForImages.push("yfvgbhnjmk,l,");
    this.fillDataIcons();
    this.setCurrentImage();
    
  }
 
  ngOnInit() {
  }

  fillDataIcons() {
    this.dataItems = new Array<SliderIconData>();
    this.dataItems.push(new SliderIconData("Title1","P1", "assets/i/one.png", 0));
    this.dataItems.push(new SliderIconData("Title2","P2", "assets/i/two.png", 1));
    this.dataItems.push(new SliderIconData("Title3","P3", "assets/i/three.png", 2));
  }
  
  prevImage() {
    this.index = this.index -1;
    if (this.index === -1){
      this.index = this.images.length -1;
    }
    this.setCurrentImage();
  }

  nextImage() {
    this.index = this.index +1;
    if (this.index === this.images.length){
      this.index = 0;
    }
    this.setCurrentImage();
  }
 

  setCurrentImage() {
    this.currentImage = this.images[this.index];
    this.currentText = this.textForImages[this.index];
    this.currentSliderIconData = this.dataItems[this.index];
  }
}

