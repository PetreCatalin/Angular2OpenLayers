import { async } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing'; //automatic change detection
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent (AutoChangeDetect)', () => {
  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  //There is a problem to Test a component with an external template
  //The TestBed.createComponent method is synchronous. But the Angular template compiler must read the external files from the file system before it can create a component instance. That's an asynchronous activity.

  //The test setup for BannerComponent must give the Angular template compiler time to read the files. The logic in the beforeEach of the previous spec is split into two beforeEach calls.
  //The first beforeEach handles asynchronous compilation.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true } // setare automata pentru change detection
      ]
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(el.textContent).toContain(comp.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    comp.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(el.textContent).toContain(comp.title);
  });

  //The second and third test reveal an important limitation. The Angular testing environment does not know that the test changed the component's title.
  // The ComponentFixtureAutoDetect service responds to asynchronous activities such as promise resolution, timers, and DOM events. But a direct, synchronous update of the component property is invisible.
  // The test must call fixture.detectChanges() manually to trigger another cycle of change detection.

  //There is no harm in calling detectChanges() more often than is strictly necessary. ---> mai bine il folosesc mereu
});