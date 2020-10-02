class Dog {  
  sound = "barking";  
}  
class Cat {  
  sound = "Meow meow......";  
}  
class Rat {  
  sound = "Squeak";  
  fly(){  
      console.log("Cannot Fly!");  
  }  
}  
let cat: Cat = new Dog(); 
console.log(cat.sound);
let dog: Dog = new Cat(); 
console.log(dog.sound);
let cat2: Cat = new Rat(); 
console.log(cat2.sound); 

//let rat: Rat = new Cat();  //This results an error
