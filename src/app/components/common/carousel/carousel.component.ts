import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];
  currentIndex = 0;
  currentTranslate = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentTranslate += 600; // Adjust based on your carousel width
    }
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.currentTranslate -= 600; // Adjust based on your carousel width
    }
  }
}
