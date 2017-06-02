import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private headers: Headers;
  private albumsUrl: string;
  private albumUrl: string;

  // tslint:disable-next-line:max-line-length
  private access_token = 'BQCr1tMmpPrhuzIWKSzbe6WBk-QSYzZunFn2tHlUM2TcBITwkiJi1Tp4FOksq310Pi8wEHtpTZPYsd_OrEWUasGrFZdTPyHOTioUnVPKT3Gu7qEKwkQ19nqr5PHw28CHwGPN-Iarf6MS_IMQVrESAv6yHuRA';
  constructor(private http: Http) {
    this.headers = new Headers();
      this.headers.append('Authorization', 'Bearer '+this.access_token);
     }

  searchMusic(str: string, type= 'artist'){
    this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
    return this.http.get(this.searchUrl, {headers: this.headers}).map(res => res.json());
  }

  getArtist(id: string){
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this.http.get(this.artistUrl, {headers: this.headers}).map(res => res.json());
  }

  getAlbums(artistId: string) {
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get(this.albumsUrl, {headers: this.headers}).map(res => res.json());
  }

  getAlbum(albumId: string){
    this.albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    return this.http.get(this.albumUrl, {headers: this.headers}).map(res => res.json());
  }
}
