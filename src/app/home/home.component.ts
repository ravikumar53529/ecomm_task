import { Component, AfterViewInit } from '@angular/core';
import { GoogleServiceService } from '../google-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  images: Array<string> = [
    '../../assets/homeimage.jpeg',
    '../../assets/produtcsimages/mens.jpg',
    '../../assets/produtcsimages/kids.jpg',
  ];
  constructor(private google: GoogleServiceService) {}
  //google user value
  ngAfterViewInit(): void {}
}
