import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home/home';
import { experience, projects, skyjackFigures } from './projects';
import { Skyjack } from './skyjack/skyjack';

describe('Portfolio pages', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, Skyjack],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('home renders every project and job', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.card').length).toBe(projects.length);
    expect(el.querySelectorAll('.timeline > li').length).toBe(experience.length);
  });

  it('skyjack page renders every figure', async () => {
    const fixture = TestBed.createComponent(Skyjack);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('figure').length).toBe(skyjackFigures.length);
  });
});
