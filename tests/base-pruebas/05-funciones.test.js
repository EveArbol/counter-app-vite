import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones.js', () => {
    

    test('getUser debe retonar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe retornar un objeto que contiene un argumento', () => {

        const nombre = 'Eve';
        const testUsuarioActivo= (nombre) => ({
            uid: 'ABC567',
            username: nombre
        })
        
        const user = getUsuarioActivo(nombre);

        expect( testUsuarioActivo(nombre) ).toEqual( user);

    });

    
});



