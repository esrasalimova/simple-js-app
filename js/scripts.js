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

for (let i=0; i < repository.lenght; i++){
  if (repository[i].height <1 && repository[i].height> 0.8){
    console.log(repository[i].name + "is a big pokemon");
  }else if (repository[i].height < 0.8){
    console.log(repository[i].name + "is a small pokemon");
  }else {
    console.log(repository[i].name + "is a avarage pokemon");
  }
}
