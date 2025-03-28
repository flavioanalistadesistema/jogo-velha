import { somar } from "../src";

test('Deve somar dois numeros', () => {
    const a = 1;
    const b = 2;
    const resultado = somar(a, b);
    
    expect(resultado).toBe(3);
});

test('Deve somar dois numeros (2)', () => {
    const a = 2;
    const b = 2;
    const resultado = somar(a, b);
    
    expect(resultado).toBe(3);
});