const reverseString = require('./reversestring');

test('reverseString func exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});
