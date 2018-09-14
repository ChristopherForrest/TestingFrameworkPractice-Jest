var login = require("./simpleLogin.js") 

// Username
it('requires username.', () =>{
    let username = "hello"
    let password = "ok"
    expect(login(username,password)).toBe(true);
});

it('requires username.', () =>{
    let username = "hello"
    let password = ""
    expect(login(username,password)).toBe(false);
});

// Password 
it('requires password.', () =>{
    let username = "ok"
    let password = "hello"
    expect(login(username,password)).toBe(true);
});

it('requires password.', () =>{
    let username = "ok"
    let password = ""
    expect(login(username,password)).toBe(false);
});

