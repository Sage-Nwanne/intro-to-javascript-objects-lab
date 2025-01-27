const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }







  
//   console.dir(pokemon, { maxArrayLength: null })

// console.log (pokemon[58]);

// console.log(game)

/*
============================================= Exercise 3 ===========================================
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". 
*/

// // const game.difficulty() {
//     for (let idx = 0, idx < 9, idx++ )
//         if (game.gyms[idx] < 4 );{  
//             console.log('Easy');

//         } else if (game.gyms[idx] > 4 && game.gyms[idx] < 7 );{
//             console.log('Med')

//         } else {
//             console.log('Hard')
//         }

// }

// game.difficulty();

// console.log(game);

// need to debug







// ============================================= Exercise 4 =============================================
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

// Pokémon 1: Bulbasaur
// Pokémon 4: Charmander
// Pokémon 7: Squirtle
// Pokémon 25: Pikachu


game.party = pokemon[3]

console.log ('excercise 4', game.party)

//================================================ Exercise 5 ================================================
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

//answer,,,,,,
game.party = [pokemon[3], [pokemon[53]],[pokemon[29]],[pokemon[99]],]
console.log ('excercise 5',game.party)

// ================================================ Exercise 6 ===================================================
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.



for (let idx = 0; idx < game.gyms.length; idx++){
    if (game.gyms[idx].difficulty < 3){
        game.gyms[idx].completed = true
    }
}
    console.log('excercise 6',game.gyms)


//  =============================================== Exercise 7 ==================================================
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?

// Hint: 
//   - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
//   - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
//   - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
//   - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

// More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

game.party.splice(0,1,pokemon[4]);

console.log('excercise 7',game.party);


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

let pokemonInParty = []

for (let partyIdx = 0; partyIdx < game.party.length; partyIdx++){
  let pokemonInParty = game.party[partyIdx].name;
  console.log(pokemonInParty);
}

console.log('excercise 8', pokemonInParty )

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

let isAStarterPoke = pokemon.starter[true];

for(pokemonStarterCount = 0; pokemonStarterCount < pokemon.length; pokemonStarterCount++){
  if (isAStarterPoke === true) {
    console.log(pokemon[pokemonStarterCount].name);
  }
  
}

console.log('excercise 9', isAStarterPoke)



/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/






