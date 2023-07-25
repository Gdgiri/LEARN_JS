const name=[
    {id:1, Firstname:"giri",Lastname:"dharan"},
    {id:2, Firstname:"hari",Lastname:"ramakrishnan"},
    {id:3, Firstname:"Tony",Lastname:"Stark"},
];

let people = name.map(function(value){
    return value.Firstname+value.Lastname;
});

console.log(people);

let people2=name.map(function (value){
    return [value.Firstname,value.Lastname].join(" ");
});

console.log(people2);

let people3=name.map(function (value){
    let fullname=[value.Firstname,value.Lastname].join("");

    let obj={
        id:value.id,fullname
    }
    return obj;
});

console.log(people3);