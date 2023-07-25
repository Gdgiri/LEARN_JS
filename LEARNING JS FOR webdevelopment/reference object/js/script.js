const shopping_cart=[
    {id:1,item:"maggiee",cost:12},
    {id:2,item:"Milk",cost:50},
    {id:3,item:"DairyMilk",cost:40},
];

let shop=shopping_cart.reduceRight(function(prevoiousvalue,currentvalue){
    return prevoiousvalue+currentvalue.cost
},10);

console.log(shop);