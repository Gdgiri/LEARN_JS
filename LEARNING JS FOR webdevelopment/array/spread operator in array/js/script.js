let firstName="giri";
let lastName="dharan";

let fullName=firstName.concat(lastName);

console.log(fullName);

let cart=[{
    item:"maggiee",
}];

let another_cart=["salt","carrot","beans","oil","extra masala"];

console.log(another_cart);

console.log(cart);

// let recipe=cart.concat(another_cart);

// console.log(recipe);

let recipe =[...cart,...another_cart,"water"]

console.log(recipe);

