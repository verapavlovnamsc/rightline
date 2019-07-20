import { Component, OnInit, Input} from '@angular/core';
import { IconTextDataService } from '../icon-text-data.service';
import { IconData } from '../models/iconTextData';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css']
})
export class IconTextComponent implements OnInit {
  @Input('id') componentId: number;
  componentData: IconData;

  constructor(private service: IconTextDataService) {
    this.componentData = new IconData();
  }

  ngOnInit() { 
    this.service.getJson().subscribe(result => {
      this.componentData = result.find(x => x.id == this.componentId);
      //console.log(this.componentData);
    });

  }

}
