import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp.js', () => {


    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar un undefined si no existe el heroe', () => {
        const id = 0;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
    });

});

