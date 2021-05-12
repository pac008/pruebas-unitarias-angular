import { routes } from './app.routes';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';



describe('App Routes', () => {

    it('las rutas deben de contener el path: medico/:id', () => {


        expect(  routes ).toContain( { 
                                    path: 'medico/:id', 
                                    component: MedicoComponent 
                                },)
    })
})