import { dividir, multiplicar, somar, subtrair } from "../src";

test('Deve somar dois numeros', () => {
    const a = 1;
    const b = 2;
    const resultado = somar(a, b);
    
    expect(resultado).toBe(3);
});

test('Deve dividir dois numeros', () => {
    const a = 4;
    const b = 2;
    const resultado = dividir(a, b);
    
    expect(resultado).toBe(2);
});

test('Erro ao dividir por zero', () => {
    const a = 4;
    const b = 0;
    
    expect(() => dividir(a, b)).toThrow("Divisão por zero não é permitida.");
})  

test('Deve subtrair dois numeros', () => {
    const a = 5;
    const b = 2;
    const resultado = subtrair(a, b);
    
    expect(resultado).toBe(3);
});

test('Deve multiplicar dois numeros', () => {
    const a = 3;
    const b = 2;
    const resultado = multiplicar(a, b);
    
    expect(resultado).toBe(6);

});