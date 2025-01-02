let top3 = ["The Colosseum", "Trevi Foundation", "The Vetican City"];

function showItinerary(place1, place2, place3) {
  console.log("visit " + place1);
  console.log("visit " + place2);
  console.log("visit " + place3);
}

showItinerary(...top3);
