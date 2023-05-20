let trainer = {
  name: "Shyrine",
  age: 19,
  pokemon: [],
  friend: {
    bestFriend: ["Kyla"],
    },
  
  talk: function() {
    console.log("Pikachu! I choose you!");
  },
};

console.log(trainer.name);
console.log(trainer["age"]);
console.log(trainer.pokemon);
console.log(trainer.friend);

trainer.talk();


let myPokemon = {
  name: "Pikachu",
  level: 3,
  health: 100,
  attack: 50,
  tackle: function () {
    console.log("This Pokemon tackled targetPokemon");
    console.log("targetPokemon's health is now reduced to -targetPokemonHealth_");
  },
  faint: function () {
    console.log("Pokemon fainted");
  }
};

console.log(myPokemon);

// Create an object constructor
function Pokemon(name, level, health) {
  // Properties
  this.name = name;
  this.level = level;
  this.health = health;
  this.health = 2 * health;
  this.attack = level;

  // Methods
  this.tackle = function (target) {
    let difference = this.attack - target.health;
    console.log(this.name + " tackled " + target.name);
    console.log("The difference between " + this.name + "'s attack and " + target.name + "'s health is " + difference);
    console.log("targetPokemon's health is now reduced to " + (target.health - this.attack));
  };

  this.faint = function () {
    console.log(this.name + " fainted");
  };
}

// Create new instances of the "Pokemon" object each with their unique properties
let pikachu = new Pokemon("Pikachu", 16, 80);
let rattata = new Pokemon("Rattata", 8, 60);

pikachu.tackle(rattata);
pikachu.faint();
