import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifContComponent } from './gif-cont.component';

describe('GifContComponent', () => {
  let component: GifContComponent;
  let fixture: ComponentFixture<GifContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
