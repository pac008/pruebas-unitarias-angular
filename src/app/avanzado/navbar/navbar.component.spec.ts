import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un routerLink que vaya a medicos', () => {
    
    const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    let existe: boolean = false;
  
    elementos.forEach( elemento => {
        if ( elemento.attributes.routerLink === '/medicos' ) {
          existe = true;
        }

    });
  
    expect( existe ).toBeTruthy();
  
  })
});
