// TODO:
// Declare `products`, the different that you will be selling under each of the departments.
// var products = []
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
];
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = [];

var shopFromStore =  function() {
  var refNr = askUserForReferenceNumber();

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it

  displayTotalPrice();

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message

  exitPrompt();

};


var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

    products.forEach( function(product) {
      if (product.referenceNumber == refNr) {
        var x = product;
        // console.log(x);
        shoppingCart.push(product);
      }
    });

    const shoppingCartElement = document.getElementById('shopping-cart')
    shoppingCartElement.innerHTML = '';


  // use the printProductsOnScreen function for inspiration

  for(var item of shoppingCart){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement2 = document.createElement('span');
    referenceNumberElement2.className  = 'referenceNumber';
    referenceNumberElement2.innerText = item.referenceNumber;

    var nameElement2 = document.createElement('span');
    nameElement2.className  = 'name';
    nameElement2.innerText = item.name;

    var priceElement2 = document.createElement('span');
    priceElement2.className  = 'price';
    priceElement2.innerText = item.price;

    // Wrap our just created elements in a div
    var productElement2 = document.createElement('div');
    productElement2.className = 'shopingcart';

    productElement2.appendChild(referenceNumberElement2);
    productElement2.appendChild(nameElement2);
    productElement2.appendChild(priceElement2);

    // Hang that div on the page
    document.getElementById('shopping-cart').appendChild(productElement2);

  }
};

var askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
  refNr = window.prompt("What Product would you like to add to the cart? Please type in the corresponding Reference Number.");
};


function exitPrompt() {
    var answer;
    answer = prompt("Do you want to continue shopping? (Y/N)");
    if (answer === null) {
        return; //break out of the function early
    }
    switch (answer.toUpperCase()) {
    case 'Y':
          // Continue shopping if yes
        break;
    case 'N':
        window.alert("Thank you for shooping at Yo!Ga. Have a wonderful day! :-)");
        break;
    }
}





//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {


  var sum = 0;

  for (var i = 0; i < shoppingCart.length; i++) {
    document.getElementById('total-price').innerText = sum += shoppingCart[i].price;
  }



};



var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
