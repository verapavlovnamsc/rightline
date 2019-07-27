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
    this.images.push("assets/i/sbp.png");
    this.images.push("assets/i/two.png");
    this.images.push("assets/i/ekv.png");
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
    this.dataItems.push(new SliderIconData("СБП-коннект","Коробочное решение для подключения Банка к Системе Быстрых Платежей, действительно проверенное опытом. В начале 2019 года НСПК  и Центральный банк запустили пилот СБП, в котором приняли участие 12 организаций в т. ч. и наше решение, которое является успешным проектом.", "assets/i/one.png", 0));
    this.dataItems.push(new SliderIconData("3-D Secure v2","Защита Мерчантов, Эмитентов и держателей карт от мошенничества с платежами без присутствия карты (card notpresent или CNP) и стандарт взаимодействия между всеми участниками платежа, позволяя закрепить ответственность за Эмитентом или Эквайером.", "assets/i/two.png", 1));
    this.dataItems.push(new SliderIconData("Интернет-эквайринг","Многофункциональное решение для развития интернет эквайринга реализует различные варианты подключения и схемы работы для ТСП: платежная страница, платежный виджет, платежные модули для популярных CSM, API для прямого подключения, 3ds/non3ds, автоподтверждение платежа, выставление счетов, привязка карт, и многое другое.", "assets/i/three.png", 2));
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

