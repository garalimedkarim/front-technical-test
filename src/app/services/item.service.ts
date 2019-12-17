import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiEndPoint: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
    this.apiEndPoint = this.config.apiEndPoint;
    console.log("api", this.apiEndPoint);
  }

  getItems(url?:string) {
    if(!url)
      url = "/api/items";
    return this.http.get(this.apiEndPoint + url)
      .pipe(
        map((response: any) => {
          return response.items.map((item: any) => {
              return new Item(
                item.id,
                item.name,
                item.folder,
                item.creation,
                item.modification,
                item._links
              );
            });
        })
      );

  }

  // downloadItem(url:string){
  //   return this.http.get(this.apiEndPoint+"/api/items/"+url);
  //   // return this.http.get(url);
  // }
  
}
