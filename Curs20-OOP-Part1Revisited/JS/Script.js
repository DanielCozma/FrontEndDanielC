function User(options){
  options=options || {};
  this.name=options.name;
  this.age=options.age;
  this.weight=options.weight;
  this.height=options.height;
}

User.prototype.calculateBMI=function(){
  return this.weight/(this.height*this.height);
}

var Ana=new User({
  name: "Ana Popescu",
  age: 25,
  weight: 55,
  height: 1.70
});

console.log("Ana's BMI", Ana.calculateBMI());

console.log("User's prototype property", User.prototype);
console.log("Ana's prototype attribute", Object.getPrototypeOf(Ana));
console.log("They are the same.");
console.log("E corect:",User.prototype.isPrototypeOf(Ana));