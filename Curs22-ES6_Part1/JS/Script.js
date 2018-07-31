test();//test function is hoistet so we can call it before it's defined in the cod

//console.log(str);
         //global scipe, str is not declared or defined yet, it will trow --> reference error

function test(){
 //console.log(str); //var str it is hoisted in local scope from the first line in for --> undefined
  
  for(var i=1; i<10;i++){
    var str='Something'+i;
    console.log(str);
  }
}

//myfunction(); // it won't work, only the declaration is moved on top of the scope, not the asignment
var myfunction = function(){
  console.log("ABCD");
}

const mynumber=2;
//mynumber=7;//error

const user={
  name: "Jon",
  age: 35
}

// user = {
//   name: "Mary",
//   age: 35
// } /// error, can't overwrite a constant

user.name="Mary";
console.log("User", user); // it will work


//ES6 Part 2
const numbers=[5,7,-2,4,8,9,13];
let evens=[];

for(let i=0; i<numbers.length; i++)
  {
    if(numbers[i]%2===0){evens.push(numbers[i]);}
  }

console.log("After for", evens);

evens=[];
numbers.forEach(function(currentElement){
  if(currentElement%2===0){
    evens.push(currentElement);
  }
});

 console.log("After foreach", evens);
 
evens=[];
numbers.forEach(currentElement =>{
 if(currentElement%2===0){
    evens.push(currentElement);
  }
});

console.log("After foreach arrow function", evens);

//Lexical this
window.onload=function(){
  const button=document.getElementById("myelement");
  
  this.clicked=0;
//   const that=this;
//   button.addEventListener('click', function(){
//     that.clicked++;
//     console.log("Button clicked "+that.clicked+" times.");
//   });
  
  button.addEventListener('click',()=>{
    this.clicked++;
    console.log("Button clicked "+this.clicked+" times.");
  })

  };

//-----------------CLASSES---------------------------
console.log("Classes!!!");
class Animal{
  //special method used for objec creation and initialization, only one per class
  //this is the one that's called when using "new"
  constructor (options){
    options=options || {};
    this.name=options.name;
    this.color=options.color;
    this.weight=options.weight;
    this.height=options.height;
    this.legs=options.legs;
  }
  
  eat(){
    console.log("nom, nom animal is eating.");
  }
  
  speak(){
    console.log("Hello! Animal is speaking!");
  }
  
  //define getter methods
  get biometricData(){
    return "This animal is "+this.height+" tall and weights "+this.weight;
  }
  
  //define setter tools
  set biometricData(data){
    //data will be format [height,weight]
    this.height=data[0];
    this.weight=data[1];
  }
  
 static SIT(){
   console.log("Sitting from a static method!");
 }
}
//create Animal instance
const fulga = new Animal({
  name: "Fulga",
  color: "purple",
  weight: "200 kg",
  height: 1.8,
  legs: 4
});
console.log("Fulga",fulga);
//invoke class methos
fulga.eat();
fulga.speak();
//use getter
//property not method
console.log(fulga.biometricData);

//use setter
//property not method
//the value assigned should be in a format expected by the setter
fulga.biometricData = ["2m", "250 kg"];
console.log(fulga);

//calling a static method
//static methods are availeble on the class directly, not from an instance
Animal.SIT();
//NOT fulga.SIT();

console.log("Inheritance!!!!!");

//define child class, it extends Animal superclass
class Dog extends Animal{
  //constructor function is optional in child class
  constructor(options){
    //need to call super method, it calls constructor of the parent class
    super(options);
    this.legs=4;
    this.breed=options.breed;
  }
  
  //method overriding
  speak(){
    console.log("Ham, ham, ham!!!");
  }
}

const nero=new Dog({
  name: "Nero",
  color: "white",
  height: "50 cm",
  weight: "25 kilograme",
  breed: "Ciobanesc de silvostepa"
});

nero.speak();
console.log("Nero",nero);
