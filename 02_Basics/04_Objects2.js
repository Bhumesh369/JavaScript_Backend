// singleton object

const myObj = new Object(); // This is the syntax of singleton object, it is same as below.
//const myObj = {}

myObj.id = "123bhuvi";
myObj.name = "Bhumesh";
myObj.email = "bhumesh@google.com";
myObj.isLoggedIn = false;
myObj.regularUser = {
    fullname:{
        userfullname:{
            firstName: "Bhumesh",
            lastName: "Parate"
        }
    }

}
console.log(myObj.regularUser.fullname.userfullname.firstName);
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1,obj2,obj3}; // It will add the objects inside a single objects not the contents if it
const obj4 = Object.assign({},obj1,obj2,obj3); // fist empty object is target into which the source contents will be added and others are sources.
console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3} // this is spread operator, works as per above with short syntax
console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.values(obj5))
console.log(Object.entries(obj5));


// const obj4 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "bhumesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Bhumesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

