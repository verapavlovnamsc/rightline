import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconData } from './models/iconTextData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconTextDataService {
  data: Array<IconData>;
  jsonPath: string;
  constructor(private http:HttpClient) { 
    this.jsonPath = "assets/iconData.json";
  }

  public getJson(): Observable<Array<IconData>> { 
    return this.http.get<Array<IconData>>(this.jsonPath);
  }

}


