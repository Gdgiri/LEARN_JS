// object - oriented programming(oop).

let name="giri";
let age="22";
let intrest=["creating a new software", "writtung a story"];

//object
let address={
    city:"devakottai",
    state:"tamilnadu",
};

// the name of giri is greeting something with use of function.

function greeting(){
     // let msg="my name is " +name+ " i love to do " +intrest+"";
    // this part we able to tilda method. tilda symbol[``].
    let msg=`my name is ${name}i love to do ${intrest}`;
    console.log(msg);

    
}

greeting();// this is function type

// now we going to create a function in object also

// in this oop concept we going to make all the variables into object it's called encapsulation.

let person={
    name:"giri",
    age:22,
    intrest:["creating a new software", "writtung a story"],

    address:{
        city:"devakottai",
        state:"tamilnadu",
    } ,// this is object inside another object. it is also called nested object. 

    greeting:function(){
        let msg=`my name is ${this.name}i love to do ${this.intrest}`;// in this function. function as created into object so person is also a object so inside object call another object so we put "this" keyword. it is used to select the object word.
        console.log(msg);


    }

    

};

person.greeting();// this line calling the function

