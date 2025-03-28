export function somar (a: number, b: number): number {
  return a + b;
}

export function subtrair (a: number, b: number): number {
  return a - b;
}

export function multiplicar (a: number, b: number): number {
  return a * b;
}

export function dividir (a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}