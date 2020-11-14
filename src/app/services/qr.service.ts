
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private url: string = environment.url;
  constructor(private httpClient: HttpClient) {

  }

  public generateQr(url: string) {
    return this.httpClient.post(this.url, { url }, {});
  }
}
