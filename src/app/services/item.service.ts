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

  getItems(parentId:string) {
    let urlParameter = "";
    if(parentId){
      urlParameter += "?parentId="+parentId
    }
    return this.http.get(this.apiEndPoint+ "/api/items" + urlParameter)
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

  deleteItem(fileId: string) {
    return this.http.delete(this.apiEndPoint + "/api/items/" + fileId);
  }

  newDirectory(parentId:string,folderName:string){
    let urlParameter = "";
    if(parentId){
      urlParameter += "?parentId="+parentId
    }
    return this.http.post(this.apiEndPoint + "/api/items"+urlParameter,{
      "name": folderName,
      "folder": true      
    });
  }

  uploadFile(parentId:string,file: any) {
    let urlParameter = "";
    if(parentId){
      urlParameter += "?parentId="+parentId
    }

    const fd = new FormData();
    fd.append("name",file,file.name);
    // fd.append('folder',"true");

    return this.http.post(this.apiEndPoint + "/api/items"+ urlParameter,fd);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data'
    //   })
    // };
    // return this.http.post(this.apiEndPoint + "/api/items",     {
    //   "name": file.name,
    //   "folder": false
    // }, httpOptions);

    // const req = new HttpRequest('POST', this.apiEndPoint+"/api/items/", {
    //   "name": file.name,
    //   "folder": false
    // }, {
    //   reportProgress: true
    // });

    // return this.http.request(req)
    // .pipe(
    //   // map(event => this.getEventMessage(event, file)),
    //   // tap(message => this.showProgress(message)),
    //   // last(), // return last (completed) message to caller
    //   // catchError(this.handleError(file))
    // );
  }

  // private showProgress(message: any) {
  //   console.log("showProgress==== ", message);

  // }

  // private getEventMessage(event: HttpEvent<any>, file: File) {
  //   switch (event.type) {
  //     case HttpEventType.Sent:
  //       return `Uploading file "${file.name}" of size ${file.size}.`;

  //     case HttpEventType.UploadProgress:
  //       // Compute and show the % done:
  //       const percentDone = Math.round(100 * event.loaded / event.total);
  //       return `File "${file.name}" is ${percentDone}% uploaded.`;

  //     case HttpEventType.Response:
  //       return `File "${file.name}" was completely uploaded!`;

  //     default:
  //       return `File "${file.name}" surprising upload event: ${event.type}.`;
  //   }
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

  // uploadFile(file){
  //   this.http.post(this.apiEndPoint+"/api/items/",file);
  // }

  // downloadItem(url:string){
  //   return this.http.get(this.apiEndPoint+"/api/items/"+url);
  //   // return this.http.get(url);
  // }

}
