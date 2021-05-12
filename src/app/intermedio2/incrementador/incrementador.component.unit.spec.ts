import { IncrementadorComponent } from './incrementador.component';





describe('Incrementador Component Unit ', () => {

    let componete: IncrementadorComponent;

    beforeEach( () => componete = new IncrementadorComponent() );

    it('EL progreso no debe de pasar de 100', () => {

        componete.progreso = 50;

        componete.cambiarValor( 5 )

        expect( componete.progreso ).toBe( 55 );

    });



});