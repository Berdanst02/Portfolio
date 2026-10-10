import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cncRouter } from '../projects';

@Component({
  selector: 'app-cnc-router',
  imports: [RouterLink],
  styleUrl: './cnc-router.css',
  templateUrl: './cnc-router.html',
})
export class CncRouter {
  protected readonly project = cncRouter;
  protected readonly zoomed = signal(false);

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.zoomed.set(false);
  }
}
