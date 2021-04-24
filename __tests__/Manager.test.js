const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('will constructor set officeNum', () => {
    const officeNum = '8675309'
    const testMan = new Manager('foo', 'Foo', 'Foo', 'Foo', officeNum)

    expect(testMan.officeNumber).toBe(officeNum);
});

test('will constructor function return officeNum', () => {
    const officeNum = '8675309'
    const testMan = new Manager('foo', 'Foo', 'Foo', 'Foo', officeNum)

    expect(testMan.getOfficeNumber()).toBe(officeNum);
});

test('will constructor function return role', () => {
    const testMan = new Manager;

    expect(testMan.getRole()).toBe('Manager');
});