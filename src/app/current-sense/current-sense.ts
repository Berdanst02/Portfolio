import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentSense } from '../projects';

@Component({
  selector: 'app-current-sense',
  imports: [RouterLink],
  styleUrl: './current-sense.css',
  templateUrl: './current-sense.html',
})
export class CurrentSense {
  protected readonly project = currentSense;
  protected readonly zoomed = signal(false);

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.zoomed.set(false);
  }
}
