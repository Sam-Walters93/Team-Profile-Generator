const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('check if employee constructor creates an object', () => {
    const testEmp = new Employee;

    expect(typeof testEmp).toBe('object');
});

test('employee constructor set name', () => {
    const name = 'Tessa';
    const testEmp = new Employee(name);

    expect(testEmp.name).toBe(name);
});

test('will constructor function return employee name', () => {
    const name = 'Tessa';
    const testEmp = new Employee(name);

    expect(testEmp.getName()).toBe(name);
});

test('employee constructor set employee id', () => {
    const id = '8888';
    const testEmp = new Employee('foo', 'foo', id);

    expect(testEmp.id).toBe(id);
});

test('will constructor function return employee id', () => {
    const id = '8888';
    const testEmp = new Employee('foo', 'foo', id);

    expect(testEmp.getId()).toBe(id);
});

test('employee constructor set employee email', () => {
    const email = '8888';
    const testEmp = new Employee('foo', 'Foo', 'foo', email);

    expect(testEmp.email).toBe(email);
});

test('will constructor function return employee email', () => {
    const email = '8888';
    const testEmp = new Employee('foo', 'Foo', 'foo', email);

    expect(testEmp.getEmail()).toBe(email);
});

