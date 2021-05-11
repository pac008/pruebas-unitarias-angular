import { FormBuilder } from '@angular/forms';
import { Formulario } from './formulario';



describe('Formularios', () => {

    let componente: Formulario;

    beforeEach( ()  =>  {
        componente = new Formulario( new FormBuilder );
    });

    it('El formulario debe contener dos campos: email y password ', () => {

        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();
    })

    it('el email debe ser obligatorio', () => {

        let control = componente.form.get('email')
        control.setValue('')

        expect( control.valid ).toBeFalsy()
    })

    it('El correo debe ser válido', () => {

        let control = componente.form.get('email');
        control.setValue('miguel@gamil.com')

        expect( control.valid ).toBeTruthy()
    })

    it('la password debe ser obligatoria', () => {
        let control = componente.form.get('password');
        control.setValue('');

        expect( control.valid ).toBeFalsy();
    })
})