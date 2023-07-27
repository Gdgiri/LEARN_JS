
// primitive example1

let x=1;

let y=x;

x=2;

console.log(x);

console.log(y);

// reference example 2

let a={
    value:1,
}

let b=a;

a.value=2;

console.log(a);

console.log(b);

// primitive example2

let cart=5;

function update(cart){
    cart++;
}

console.log(cart);


// reference example2

let cart1={
    value:5,
}

function update(cart1){
    cart.cart++;
}

updatecart(cart1);

console.log(cart1);


