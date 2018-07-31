var emptyObject = {}; // no properties and no methods
console.log(emptyObject);

var emptyObject2 = new Object();
console.log(emptyObject2);

var userMe = {
  name: "Mela Moldovan",
  age: 29,
  height: 165,
  weight: 55,
  "eyes color": "brown",
  //   age: 22 - duplicated keys are not possible

  sayHi: function() { // method without parameters
    console.log("Hello world from an object method!");
  },
  sayHiTo: function(name) { // method with param
    console.log("Hello, " + name + "!");
  }
};

console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("grupa 5");

console.log(userMe.name); // dot notation
console.log(userMe["eyes color"]);
console.log(userMe["name"]); // brackets notation

var prop = "height";
console.log("height", userMe[prop]); // will display the height
console.log(userMe.prop); // same as: userMe["prop"]

prop = "age";
console.log("age", userMe[prop]); // will display age


console.log("userMe keys", Object.keys(userMe));
console.log("userMe values", Object.values(userMe));

var keys = Object.keys(userMe);
for (var i = 0; i < keys.length; i++) {
  var prop = keys[i];
  console.log(prop, userMe[prop]);
}

// constructor function
function User(options) {
  // this is used to avoid console errors
  options = options || {};
 
  this.name = options.name || "";
  // if we're not sending a name, the object 
  // will get empty string as its name
  
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.calculateBMI = function() {
    return this.height / this.weight;
  }
}

var user = new User({
  name: "Mela",
  height: 165,
  weight: 55
});

console.log("user created with constructor function", user);
console.log("user bmi", user.calculateBMI());

var colleague = new User({
  height: 175,
  name: "Andreea",
  weight: 55
});

console.log("colleague", colleague);
console.log("colleague bmi", colleague.calculateBMI());

console.log("User prototype", User.prototype);

// user.sayHi();

User.prototype.sayHi = function() {
  console.log("Hi there from " + this.name);
}

user.sayHi();
colleague.sayHi();


console.log("there is no prototype property on objects", 
            user.prototype); // => undefined

console.log("prototype attribute", 
            Object.getPrototypeOf(user),
            Object.getPrototypeOf(colleague));

console.log("constructor function prototype is prototype of object", 
           User.prototype.isPrototypeOf(user),
           User.prototype.isPrototypeOf(colleague));

console.log(user.toString());






