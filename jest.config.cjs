module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/*.test.js'],
    moduleFileExtensions: ['js', 'json', 'node'],
    rootDir: '.',
};
