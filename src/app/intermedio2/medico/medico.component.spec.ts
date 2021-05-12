import { MedicoComponent  } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicosService } from '../../intermedio/espias/medicos.service';
import { HttpClientModule } from '@angular/common/http';


describe('Médico component', () => {


    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicosService ],
            imports: [ HttpClientModule ]
        });
        fixture = TestBed.createComponent( MedicoComponent );
        componente = fixture.componentInstance;
    })

    it('Debe de crearse el componente', () => {
        expect( componente ).toBeTruthy()
    });

    it('Debe retornar el nombre del médico', () => {

        const nombre = 'Juan';

        const res = componente.saludarMedico( nombre );

        expect( res ).toContain( nombre );
    })
});