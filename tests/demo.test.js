
describe('Pruebas en <demoComponent />', () => {})

test('Esta prueba no debe fallar', () => {
   
    // 1. Inicialización
    const message1 = 'Hola Mundo';

    // 2. estímulo

    const message2 = message1.trim();
    // 3.Observar el comportamiento... esperado

    expect( message1 ).toBe( message2 );
})