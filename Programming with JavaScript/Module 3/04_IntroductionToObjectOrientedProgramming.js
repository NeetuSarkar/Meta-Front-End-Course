//functional programming
// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice(shoes, tax){
//   return shoes*tax;
// }

// var toPay = totalPrice(shoes,stateTax);
// console.log(toPay);


//OOPS
var purchase1 = {
  shoes:100,
  stateTax: 1.2,
  totalPrice: function(){
    var calculator = purchase1.shoes*purchase1.stateTax;
    console.log("Total Price: ", calculator);
  }
}