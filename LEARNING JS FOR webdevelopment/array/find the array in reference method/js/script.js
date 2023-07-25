const orders=[
    {id:1,item:"smartphone",quantity:1},
    {id:2,item:"laptop",quantity:3},
    {id:3,item:"earphones",quantity:4},
]

let result=orders.findIndex(function(order){
    return order.item==="earphones"
})

console.log(result);

let results=orders.find(function(order){
    return order.item==="earphones"
})

console.log(results);