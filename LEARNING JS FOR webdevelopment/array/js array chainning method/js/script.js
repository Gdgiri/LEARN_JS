const name=[
    {id:1,name:"giri",age:22},
    {id:2,name:"hari",age:24},
    {id:3,name:"varsha",age:25},
    {id:4,name:"anu",age:23}
];

let people=name.sort().map(function(value){
    return [value.name,value.id,value.age].join(" \n\n");
});

console.log(`people's are ${people}` );