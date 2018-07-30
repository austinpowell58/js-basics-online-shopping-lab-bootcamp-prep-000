var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var object = {itemName: item, itemPrice: (Math.random() * 100)}
 cart.push(object)
 return item +  " has been added to your cart."
}

function viewCart() {
  // write your code here
  var itemprices = []
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    itemprices.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
  }
  else if (cart.length === 2) {
  itemprices.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
  itemprices.push(` and ${cart[1].itemName} at $${cart[1].itemPrice}`)
  itemprices.join()
     } 
  else if (cart.length === 3) {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        itemprices.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else if (i === 0) {
      itemprices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else {
      itemprices.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      itemprices.join(`,`)
    }
  }
  return `In your cart, you have ${itemprices}.`
}

function getSum(total, num) {
    return total + Math.round(num);
}

function total() {
  // write your code here use a for loop to 1. get into the each object
  var total = 0
  for (var i = 0 ; i < cart.length; i++) {
    total += cart[i].itemPrice; 
  }
  return total
}

function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++) {
   if (item === getCart().itemName){
   delete cart[i]
   return cart
  } 
   else {
     console.log("That item is not in your cart.")
  }
 }
 return `That item is not in your cart.`
}

function placeOrder(cardNumber = ``) {
  // write your code here
  if (cardNumber === ``) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
  var total = 0
  for (var i = 0 ; i < cart.length; i++) {
    total += cart[i].itemPrice; 
  }
    return `Your total cost is $` + total +  `, which will be charged to the card ` + cardNumber + `.`
   }
  
}
