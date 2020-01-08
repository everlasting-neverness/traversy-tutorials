const functions = require('./functions');

// There is a possibility to run some funcs before or after tests

// beforeEach(() => initDB());
// afterEach(() => closeDB());

beforeAll(() => initDB());
afterAll(() => closeDB());

const initDB = () => console.log('DB initialized');
const closeDB = () => console.log('DB closed');


const nameCheck = () => console.log('checking names');

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('user is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('user is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
})



test('Adds 1 + 2 to equal 3', () => {
    expect(functions.add(1, 2)).toBe(3);
});

test('Adds 1 + 2 not to equal 5', () => {
    expect(functions.add(1, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual is for non-primitive types comparison
test('User should be John Doe object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'John',
        lastName: 'Doe'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under or equal 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    // 'assertions' is used for async requests to ensure that the number of checks
    // which was passed as argument have been called in callbacks.
    // If not 'assertions', tests may be completed before the async data will return in response.
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
