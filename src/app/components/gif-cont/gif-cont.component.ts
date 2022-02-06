import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/Gif';

@Component({
  selector: 'app-gif-cont',
  templateUrl: './gif-cont.component.html',
  styleUrls: ['./gif-cont.component.scss']
})
export class GifContComponent implements OnInit {

  @Input() gif :Gif;

  constructor() {}

  ngOnInit(): void {
  }
  public getUrl() :string {
    return this.gif?.images.downsized.url!;
  }
  public getUserImage() :string|undefined {
    return this.gif.user.avatar_url;
  }
  public getUserBanner() :string {
    return this.gif.user.banner_url;
  }
  public getObj() :Gif {
    return this.gif;
  }

  public goToProfile() :void {
    window.location.href = this.gif.user.profile_url;
  }

  public goToPost() :void {
    window.location.href = this.gif.url;
  }


}
