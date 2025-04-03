module.exports = {
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage', // Corrigido
    coverageReporters: ['text', 'lcov'],
    testEnvironment: 'node',
    preset: 'ts-jest',
    testMatch: ['**/test/**/*.test.ts'],    
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
    ],
    
}