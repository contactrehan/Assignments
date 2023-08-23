//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
function shoppingCart(cart = ["Chicken","Lays","Groceries","Coffee","Cheese","Sauces"])
{
    cart.splice(0,0,"Mayonese") // this will add mayonese on 0 index without deleting
    console.log("After adding:",cart)
    cart.splice(3,1,"Brocoli")// this will add "Brocoli" on index 3 with deleting the value on index 3
    console.log("After Removing:",cart)
cart.splice(2,1,"Pizza")  //groceries is on index 2, replacing it with pizza
console.log("After Updating Cart:",cart)
return cart
}
shoppingCart()