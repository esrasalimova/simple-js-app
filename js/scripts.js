//array to hold pokemon list
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

for (let i=0; i < repository.length; i++){
  if (repository[i].height <1 && repository[i].height> 0.8){
    document.write(repository[i].name + "is a big pokemon <br>");
  }else if (repository[i].height < 0.8){
    document.write(repository[i].name + "is a small pokemon <br>");
  }else {
    document.write(repository[i].name + "is a avarage pokemon <br>");
  }
}
