class Cart {
  cartItems;
  localStorageKey = undefined; // same thing as above

  constructor(localStorageKey){
    this.localStorageKey = localStorageKey; // assigning values to the properties
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if(!this.cartItems){
      this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems))
  }

    addToCart(productId) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });

      if(matchingItem){ // if we did find an item, it will be an object which is a truhty value
        matchingItem.quantity += 1; // update cartItem because they have the save reference
      } else{
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: 1,
          deliveryOptionId: '1'
        })
      }
      this.saveToStorage();
    }

    removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      })
      this.cartItems = newCart;

      this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }

}


const cart = new Cart('cart-oop'); // Object 1
const businessCart = new Cart('cart-business'); // passing values to the constructor

console.log(cart)
console.log(businessCart)