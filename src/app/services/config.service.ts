import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public apiEndPoint = "http://localhost:8080/api/";

  constructor() { }
}
