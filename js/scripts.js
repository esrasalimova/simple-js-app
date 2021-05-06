//array to hold pokemon list
let pokemonRepository = (function () {
  let pokemonList = [
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

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  pokemonList.push(pokemon);
}

return {
  getAll: getAll,
  add: add
};
})();

pokemonRepository.getAll().forEach(function (pokemon) {
if (pokemon.height < 1 && pokemon.height > 0.8) {
document.write(pokemon.name + "is a big pokemon <br>");
} else if (pokemon.height < 0.8) {
document.write(pokemon.name + "is a small pokemon <br>");
} else {
document.write(pokemon.name + "is a avarage pokemon <br>");
}
});
