class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  }


  //objeto
  var meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str] = "valor de String";
meuObj[aleat] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);


//atriburo
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");


//metodo
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]


//herança
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}


//Polimorfismo

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("O animal faz um som.");
  }
}

// Subclasse que estende a classe Animal
class Dog extends Animal {
  makeSound() {
    console.log("O cachorro late.");
  }
}

// Subclasse que estende a classe Animal
class Cat extends Animal {
  makeSound() {
    console.log("O gato mia.");
  }
}

// Função que recebe um objeto Animal e chama o método makeSound
function makeAnimalSound(animal) {
  animal.makeSound();
}

// Criando instâncias das classes Dog e Cat
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");

// Chamando a função makeAnimalSound com diferentes objetos
makeAnimalSound(dog); // Saída: "O cachorro late."
makeAnimalSound(cat); // Saída: "O gato mia."