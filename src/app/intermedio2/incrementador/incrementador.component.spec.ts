import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe  mostrar la leyenda', () => {
    
        component.leyenda = 'Proceso de carga';

        fixture.detectChanges(); // Disparar la dección de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;



        expect( elem.innerHTML ).toContain('Proceso de carga');
    });
    //Cómo se llama el whenStable se tranforma en asyncrona entonces hay que poner (done) y llamar luego del expect. o utilizar fakeAsync...
    // Para que pueda leer la especificación
    it( 'Debe de mostrar en el input el valor del progreso', fakeAsync(() => {

        component.cambiarValor( 5 );
        fixture.detectChanges();

        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;

            expect( elem.value ).toBe( '55' );

        });
    }));

    it('Debe aumetar/decrementar en 5 el progreso, cuando presiono un botón', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        //Botón restar
        botones[0].triggerEventHandler('click', null );
        expect( component.progreso ).toBe( 45 );

        //Botón sumar
        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe( 50 );

    });

    it('En el título del componente debe de mostrar el progreso', () => {
            
        const boton = fixture.debugElement.query( By.css('.btn-primary') );
        //Llamar al evento
        boton.triggerEventHandler('click', null );

        fixture.detectChanges();

        const elem:HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        
        expect( elem.innerHTML ).toContain( '45' );

    });



});
