export const cart = [];

export function addToCart(productId, productName){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){ // if we did find an item, it will be an object which is a truhty value
    matchingItem.quantity += 1;
  } else{
    cart.push({
      productId: productId,
      productName: productName,
      quantity: 1
    })
  }
}
