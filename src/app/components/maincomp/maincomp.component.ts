import { Component, OnInit } from '@angular/core';
import { GiphyHelperService } from 'src/app/services/giphy-helper.service';
import { Injectable } from '@angular/core';
import { GenericResponse } from 'src/app/models/GenericResponse';


@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {



  constructor(private gifphy :GiphyHelperService) { 
  }

  ngOnInit(): void {
  }

}
