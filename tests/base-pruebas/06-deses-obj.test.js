import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj.js', () => {

    test('Deberia retonar un objeto', () => {

        const clave = 123, nombre = 'Eve', edad = 23;

        const testContext = usContext({ clave, nombre, edad, rango : 'Capitán' });

        expect( testContext ).toStrictEqual({
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            
        })

        

    });

});