import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { profile } from './projects';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
