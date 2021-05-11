import { obtenerRobots } from './arreglos';

 


xdescribe('Prueba de arreglos', () => {

    it('Debe tener 3 o más robots', () => {

        const resp = obtenerRobots();

        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe venir Robot1 y Robot2', () => {
        
        const resp = obtenerRobots();
        
        expect( resp ).toContain('Robot1')
        expect( resp ).toContain('Robot2')
    })
 })