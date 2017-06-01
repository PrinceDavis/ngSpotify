import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  constructor(private http: Http) { }

  searchMusic(str: string, type= 'artist'){
    const access_token = 'BQDKy-SKwtU4wpDC_VfOeshxSRInhYGuh2CfG6icAmgEt9H-N6KzHVS2ssudcp9xH8hduOCTZqcS_UTk-HkIZJ-Fr30xH22kR3jE4QvUkR1ikXYXbgwFMr1Ow67U96OeYYMCDNgEdYSGxTBxRRgOwssl-4rQ';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer '+access_token);
    this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
    return this.http.get(this.searchUrl, {headers: headers}).map(res => res.json());
  }
}
