import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="Angular logo" />
      </div>
      <h1 class="hero-banner__headline">Welcome to Airstay </h1>
      <p class="hero-banner__description">
        A place to help you locate Airbnb hosts from <strong>Zanzibar</strong> with ease.
      </p>
      <!-- Add login button here called getting started -->
    </div>
  `,
})
export class HeroBannerComponent {
  logo = '../../../assets/logo.svg';
}
