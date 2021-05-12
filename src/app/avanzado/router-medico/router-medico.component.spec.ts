import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate( params ) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;

  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor )
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a medico cuando guarde uno', () => {

      const router = TestBed.inject( Router );
      const spy = spyOn( router, 'navigate');

      component.guardarMedico();

      expect( spy ).toHaveBeenCalledWith(['medico','123']);
  })

  it('Debe de colocar el id = nuevo', () => {
    
    const activatedRoute: any = TestBed.inject( ActivatedRoute );

    activatedRoute.push( { id: 'nuevo'} );

    expect( component.id ).toBe('nuevo');
  })
});
