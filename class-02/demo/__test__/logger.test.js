'use strict';
const logger = require('../src/middlewares/logger');
describe("logger middleware testing ", () => {
    let consoleSpy; // this variable to spy on console in logger method if the console use log or any other method
    let req = {}; //we put those two to fake them because they dont exist
    let res = {};
    let next = jest.fn(); // jest.fn() to fake the next
    beforeEach(() => { // this is to activate the consoleSpy
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {
            console.info("message");
        });
    });

    test('it\'s logging things', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('it calls next method', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalled();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });
})