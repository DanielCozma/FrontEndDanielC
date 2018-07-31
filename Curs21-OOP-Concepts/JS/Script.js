
//define superclass/parent
function Animal(options){
  //this is used to avoid errors when calling an animal with no parameters
  options=options || {};
  this.name=options.name;
  this.color=options.color;
  this.weight=options.weight;
  this.legs=options.legs;
}

Animal.prototype.eat=function(){
  console.log("Animal is eating.");
}
Animal.prototype.speak=function(){
  console.log("Hello, animal is speaking.");
}

var animalObj= new Animal({
  name: "A generic animal",
  color: "purple"
})

//define the child class/subclass
function Dog(options){
  //next line is used to inherit all the properties from parent class
  Animal.call(this, {legs: 4});
  //we can add any properties to a dog
  this.breed=options.breed;
  //composition relationship: has-a
  this.owner=new Owner({
    name: options.ownerName,
    age: options.ownerAge
  });
}

//the next line is used to inherit all methods from parent class
Dog.prototype=Object.create(Animal.prototype);

var nero=new Dog({name:"Nero"});
nero.name="Nero";
nero.color="white";
console.log('Nero', nero);

console.log("Nero can speek now!");
nero.speak();

//method overriding (auprascriere)
Dog.prototype.speak=function(){
  console.log("Ham, ham!");
}
nero.speak();

//define owner class for composition example
function Owner(options){
  options=options || {};
  this.name=options.name;
  this.age=options.age;
}

var rex=new Dog({
  ownerName: "Gheorghe",
  ownerAge: 22
});
console.log("Rex", rex);
console.log("Rex owner name", rex.owner.name);

function Cat(option){
  Animal.call(this, {legs: 4});
  }
Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.speak=function(){
  console.log("Miau, miau");
}

var tomy=new Cat();
tomy.name="Tomy";

//polymorphism
var animalArray=[tomy, rex, animalObj, nero];
for(var i=0; i<animalArray.length; i++)
  { var animal=animalArray[i];
     animal.speak();
  }

console.log("STATIC PROPERTIES AND METHODS!!!");

console.log("Dog.breed",Dog.breed);
var puffy=new Dog({
  name: "Puffy",
  breed: "bichon"
});
console.log("Puffy.breed", puffy.breed);

//a static property is called on the class/constructor function itself not on instances/objects
Dog.HAS_PAWS=true;
console.log(Dog.HAS_PAWS);//true
console.log(puffy.HAS_PAWS);//unndefined

Dog.SIT=function(){
  console.log("Sitting down from a static method!");
}

Dog.SIT(); //Sitting down from a static method
//puffy.SIT();//it's not a function

console.log("Object creation methods!");
var a={x:2};
var b={X:2};
console.log("a===b", a===b);//false - a and b are two different objects (not primitives)
var n=2, m=2;
console.log("n===m", n===m); //true - n and m numbert are primitives

var c=a;
console.log("a===c", a===c);//true
a.x=7;
console.log("a,b,c",a,b,c);
var kitty=Object.create(Cat.prototype);
console.log(kitty);
kitty.name="Kitty";
console.log("Kitty",kitty);





