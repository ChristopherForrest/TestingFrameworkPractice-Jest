var validate = require("./validate.js")

it('Has a valid username & password',() => {
    let username = "Bob12345"
    let password = "12345678"
    expect(validate(username,password)).toBe(true)
});

it('Has an invalid username or password',() => {
    let username = "invalidUsername"
    let password = "password1234"
    expect(validate(username,password)).toBe(false)
});
