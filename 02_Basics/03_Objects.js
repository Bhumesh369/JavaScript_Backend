
// Object.create

// object literals

// const myObj = {
//     name: "Bhumesh",
//     age: 18,
//     email: "bhumesh@google.com",
//     ["mySym symb"]: "Kashu"
// }
// myObj.email = "kashu@google.com"

// console.log(typeof myObj["mySym symb"]);

 const mySym = Symbol("key1")


const JsUser = {
    name: "Bhumesh",
    "full name": "Bhumesh Parate",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "kashu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // we need to use this syntax to capture as Symbol
// console.log(JsUser[mySym])

// JsUser.email = "bhumesh@chatgpt.com"
// Object.freeze(JsUser);   // once we freeze our object like this then the changes done after that will not reflect in O/P
console.log(JsUser);
// JsUser.email = "kashu@google.com";
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
