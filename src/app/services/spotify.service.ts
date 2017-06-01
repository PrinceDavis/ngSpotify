import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  constructor(private http: Http) { }

  searchMusic(str: string, type= 'artist'){
    const access_token = 'BQBii1T5usbYMUhMvDje4JR6gjG55KRvbOF5eEMwITihmtodoFjWUGKopjD5ZcgmMb5MW-p5fkus5Uh9DoilKRyReOiY2Z-CgXQar-2mFSIY3_BFU6aQiobsvgg2gz7k-K4KgOMH3oikLgpswKuR9rpXnrTX';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer '+access_token);
    this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
    return this.http.get(this.searchUrl, {headers: headers}).map(res => res.json());
  }
}
