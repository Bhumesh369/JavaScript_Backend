
function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("U");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}
console.log(sayMyName());

function checkMyName(){
    return "My name is Bhumesh";
}
console.log(checkMyName())
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
function mulTwoNum(num1, num2){
    console.log(num1*num2);

}
console.log(mulTwoNum(4,5));

const result = addTwoNumbers(3, 5)

 console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // Here val1 will be 200, val2 will be 400 and rest will be allocated to ...num1 which is rest operator here.
    return num1
}
function calCartPrice1(...num1){
    return num1
}
function calCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calCartPrice1(200, 400, 500, 2000))
console.log(calCartPrice2(200, 400, 500, 2000))


const user = {
    username: "Bhumesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // if there is change in the type of value then we will get undefined in the response of function
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })
console.log(handleObject(user));

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));