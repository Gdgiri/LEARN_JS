const items=[
    {id:1, item:"Mobiles",isdelivered:true},
    {id:2, item:"HeadPhones",isdelivered:false},
    {id:3, item:"T.V",isdelivered:true},
];


let isdeliverable=items.every((value)=>{
    return value.isdelivered==true;
});

let isnotdeliverable=items.some((value)=>{
    return value.isdelivered==true;
});


console.log(`IS DELIVERABLE:${isdeliverable}`);
console.log(`IS DELIVERABLE:${isnotdeliverable}`);