const number=[21,41,45,32,74,84];

console.log(`The number is......${number}`);

let result=number.sort();

console.log(`The sorted number is......${result}`);

let res=number.find((value)=>
{
    return value >50;
});

console.log(`The greatest number is......${res}`);

{
    let result=number.filter((value)=>{
        return value>50;
    });
    console.log(`The filtered number is....${result}`);
}

{
    let result=number.map((value)=>{
        return value>50;
        return "#"+value;
     });
     console.log(`The number is.....${result}`);
    }

    {
        let result=number.reduce((value)=>{
            return "#"+value;
        });
    console.log(result);
    }

console.log(result);