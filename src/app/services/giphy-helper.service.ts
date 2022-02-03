import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponse } from '../models/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class GiphyHelperService {
  private baseUrl: string = "https://api.giphy.com/v1";
  private apiKey: string = environment.giphyApiKey;


  constructor(private http: HttpClient) { }


  public getTrending() :Observable<GenericResponse> {
    return this.http.get<GenericResponse>(`${this.baseUrl}/gifs/trending?api_key=${this.apiKey}`);
  }

}
