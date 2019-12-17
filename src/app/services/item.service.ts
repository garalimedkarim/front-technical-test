import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
// import { map } from 'rxjs/operators';

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
    console.log("api",this.apiEndPoint);
  }

  getItems(){    
    return this.http.get(this.apiEndPoint+"items");
    // .pipe(
    //   map( (items:any[]) =>
    //     items.map(
    //       item=>item
    //     )
    //   )
    // )
  }


}
