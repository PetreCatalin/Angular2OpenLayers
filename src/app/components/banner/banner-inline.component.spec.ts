import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponentI } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {
    
      let comp:    BannerComponentI;
      let fixture: ComponentFixture<BannerComponentI>;
      let de:      DebugElement;
      let el:      HTMLElement;
    
      beforeEach(() => {  //Call configureTestingModule within a beforeEach so that TestBed can reset itself to a base state before each test runs.
        TestBed.configureTestingModule({ //module environment for the class you want to test.
          // In effect, you detach the tested component from its own application module and re-attach it to a dynamically-constructed Angular test module tailored specifically for this battery of tests
          declarations: [ BannerComponentI ], // declare the test component
        });
    
        fixture = TestBed.createComponent(BannerComponentI);  // Do not re-configure TestBed after calling createComponent.  --> handler pentru componenta
        // The createComponent method returns a ComponentFixture, a handle on the test environment surrounding the created component

        comp = fixture.componentInstance; // BannerComponent test instance  --> instanta
    
        // Use the fixture's DebugElement to query for the <h1> element by CSS selector.
        de = fixture.debugElement.query(By.css('h1'));
        //The query method takes a predicate function and searches the fixture's entire DOM tree for the first element that satisfies the predicate. The result is a different DebugElement, one associated with the matching DOM element.
        //The queryAll method returns an array of all DebugElements that satisfy the predicate.
        //A predicate is a function that returns a boolean. A query predicate receives a DebugElement and returns true if the element meets the selection criteria

        el = de.nativeElement; //Finally, the setup assigns the DOM element from the DebugElement nativeElement property to el. The tests assert that el contains the expected title text.
        });

        // Jasmine runs the beforeEach function before each of these tests

        it('should display original title', () => {
            fixture.detectChanges(); //Each test tells Angular when to perform change detection by calling fixture.detectChanges()
            //In production, change detection kicks in automatically when Angular creates a component or the user enters a keystroke or an asynchronous activity (e.g., AJAX) completes
            expect(el.textContent).toContain(comp.title); //verifica ca proprietatea title din componenta sa fie ce a gasit el in h1
        });

        it('should display a different test title', () => {
            comp.title = 'Test Title';
            fixture.detectChanges(); 
            expect(el.textContent).toContain('Test Title'); //verifica daca s-a facut schimbarea
        });

        it('no title in the DOM until manually call `detectChanges`', () => {
            //The TestBed.createComponent does not trigger change detection.
            //The fixture does not automatically push the component's title property value into the data bound element, a fact demonstrated in the following test:
            expect(el.textContent).toEqual('');
        });

    });