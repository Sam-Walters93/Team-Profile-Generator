const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('will constructor set github', () => {
    const github = 'github.com/stuffinsthebear'
    const testEng = new Engineer('foo', 'Foo', 'Foo', 'Foo', github)

    expect(testEng.github).toBe(github);
});

test('will constructor function return github', () => {
    const github = 'github.com/stuffinsthebear'
    const testEng = new Engineer('foo', 'Foo', 'Foo', 'Foo', github)

    expect(testEng.getGithub()).toBe(github);
});

test('will constructor function return role', () => {
    const testEng = new Engineer;

    expect(testEng.getRole()).toBe('Engineer');
});

