const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('will constructor set university', () => {
    const university = 'university.com/stuffinsthebear'
    const testInt = new Intern('foo', 'Foo', 'Foo', university)

    expect(testInt.university).toBe(university);
});

test('will constructor function return university', () => {
    const university = 'university.com/stuffinsthebear'
    const testInt = new Intern('foo', 'Foo', 'Foo', university)

    expect(testInt.getSchool()).toBe(university);
});

test('will constructor function return role', () => {
    const testInt = new Intern;

    expect(testInt.getRole()).toBe('Intern');
});