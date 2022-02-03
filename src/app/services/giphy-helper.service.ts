import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponse } from '../models/GenericResponse';
import { TrendingParams } from '../models/mClass/TrendingParams';

@Injectable({
  providedIn: 'root'
})
export class GiphyHelperService {
  private baseUrl: string = "https://api.giphy.com/v1";
  private apiKey: string = environment.giphyApiKey;


  constructor(private http: HttpClient) { }


  public getTrending(parameters? :TrendingParams) :Observable<GenericResponse> {
    if(!parameters) {
      return this.http.get<GenericResponse>(`${this.baseUrl}/gifs/trending?api_key=${this.apiKey}`);
    }
    
    let url: string = `${this.baseUrl}/gifs/trending?api_key=${this.apiKey}`;
    if(parameters.limit){
      url+=`&limit=${parameters.limit}`;
    }
    if(parameters.offset) {
      url+=`&offset=${parameters.offset}`;
    }
    if(parameters.rating) {
      url+=`&rating=${parameters.rating}`;
    }

    return this.http.get<GenericResponse>(url);
  }

}
