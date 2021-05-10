//array to hold pokemon list
let pokemonRepository = (function () {
  let repository = [
  {
  name: "Pikachu",
  height: 0.4,
  types: ["electric"]
},
  {
    name: "Ponyta",
    height: 1,
    types: ["fire"]
  },
  {
    name:
    "Staryu",
    height: 0.8,
    types: ["water"]
  }
];

function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "height" in pokemon &&
     "types" in pokemon
   ) {
     repository.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
 }
 function getAll() {
   return repository;
 }
 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listpokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listpokemon.appendChild(button);
   pokemonList.appendChild(listpokemon);
   // event listener for button
   button.addEventListener('click', function () {
     showDetails (pokemon)
   });
 }
 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem
 };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
});
