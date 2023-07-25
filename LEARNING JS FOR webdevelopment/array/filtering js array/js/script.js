const cart_items=[
    {id:1,item:"Android Mobiles", cost:6500},
    {id:2,item:"I-Phone Mobiles", cost:70000},
    {id:3,item:"realme mobiles",cost:10000},
    {id:4,item:"1+ mobiles",cost:7000},
];

let less_price=cart_items.filter(function(value){
    return value.cost<=10000;
});

console.log("less_price mobiles",less_price);

const age=[16,24,45];

let ages=age.filter(function(value){
    return value>=18;
});

console.log("Adults:",ages);

let find=cart_items.find(function(value){
    return value.cost<=10000;
});

console.log("LESS AMOUNT MOBILE:",find);

let find_index=cart_items.findIndex(function(value){
    return value.cost>=10000;
});

console.log("LESS AMOUNT MOBILES:",find_index);

