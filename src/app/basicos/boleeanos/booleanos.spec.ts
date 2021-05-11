import { retornaTrue } from './boleeanos';




describe('Prueba de booleanos', () => {
    
    it('Debe de retornar true', () => {
        const resp = retornaTrue();

        expect( resp ).toBeTruthy();

        // debe de retornar false;
        // 1ra opción: expect( resp ).toBeFalsy() 2da opción: expect( resp ).not.toBeTruthy()
    })
})