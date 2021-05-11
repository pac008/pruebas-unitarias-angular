import { incrementar } from './numeros';




 describe('Pruebas de números', () => {

    it('Debe de retornar 100 si es mayor a 100', () => {

        const resp = incrementar(200);
        expect( resp ).toBe(100);
    });

    it('Debe de retornar el valor ingresado + 1 si el mismo es menor a 100', () => {
        const resp = incrementar(50);
        expect( resp ).toBe(51);
    })
 })