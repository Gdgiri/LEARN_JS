/* const queue_age=[22,16,24]; // in this one as below 18 so 'every' cannot allow true

let allow=queue_age.every(function(value,index,array){
    return value>=18;
});
console.log("adults only allowed",allow);*/

const queue_age=[22,18,24];// in this all as 18 amd above so 'every'' allow true

let allow=queue_age.every(function(value,index,array){
    return value>=18;
});
console.log("adults only allowed",allow);

// child were allow with their parents

let queue_Age=[22,14,16];

let Allow=queue_Age.some(function(value,index,array){
    return value>=18;
});

console.log(`child were allow with their parents: ${Allow}`);

// odd or even

let numbers=[1,2,3,4,5,6];

let odd=numbers.some(function(value){
    return value%2==0;
});

let even=numbers.every(function(value){
    return value%2==1;
});

console.log(`odd number is ${odd} and even number is ${even}`);
