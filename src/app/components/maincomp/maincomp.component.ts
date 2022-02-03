import { Component, OnInit } from '@angular/core';
import { GiphyHelperService } from 'src/app/services/giphy-helper.service';
import { Injectable } from '@angular/core';
import { GenericResponse } from 'src/app/models/GenericResponse';
import { Gif } from 'src/app/models/Gif';


@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.scss']
})
export class MaincompComponent implements OnInit {

  private trendingGifs: GenericResponse|null=null;

  constructor(private gifphy :GiphyHelperService) { 
  }



  ngOnInit(): void {
    this.gifphy.getTrending().subscribe((n :GenericResponse) => this.trendingGifs=n);
  }

  public getTrendingGifs() :Gif[] {
    return this.trendingGifs?.data!;
  }

}
