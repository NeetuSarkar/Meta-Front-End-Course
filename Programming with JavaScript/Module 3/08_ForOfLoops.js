const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("The sportCar object: ", sportCar);

console.log("--- foor-in is unreliable---");
for (prop in Object.keys(sportCar)) {
  console.log(sportCar[prop]);
}

console.log("---for-of is reliable");
for (element of Object.keys(sportCar)) {
  console.log(element);
}
