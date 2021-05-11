import { mensaje } from './string';



// describe('Pruebas de Strings');
// it('debe regresar un string');


describe('Pruebas de Strings', () => {

    it('Debe de regresar un string', () => {
        
        const resp = mensaje('Miguel');

        expect( typeof resp ).toBe('string');
    })

    it('Debe de tetornar un saludo con el nombre enviado', () => {
        
        const nombre = 'miguel';
        
        const resp = mensaje( nombre );

        expect( resp ).toContain( nombre );
    })

})