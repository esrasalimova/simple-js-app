//array to hold pokemon list
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("data-toggle", "modal");
    button.innerText = pokemon.name;
    button.classList.add("button-class", "pkitem");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      event.preventDefault();
      loadDetails(pokemon).then(function (){
        showModal(pokemon);
      })
    });
}
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
    }).catch(function (e) {
      console.error(e);
    });
  }


  // show the modal content
function showModal(item) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");

  modalTitle.empty();
  modalBody.empty();

  //creating element for name in modal content
  let nameElement = $("<h1>" + item.name + "</h1>");

  let imageElementFront = $('<img class="modal-img"style="width:50%">');
  imageElementFront.attr("src", item.imageUrlFront);
  let imageElementBack = $('<img class="modal-img"style="width:50%">');
  imageElementBack.attr("src", item.imageUrlBack);

  let heightElement = "<p>" + "height : " + item.height + "</p>";

  let weightElement = "<p>" + "weight : " + item.weight + "</p>";


  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(imageElementBack);
  modalBody.append(heightElement);
  modalBody.append(weightElement);



    $("#exampleModal").modal('show');

}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})()

console.log(pokemonRepository)
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
