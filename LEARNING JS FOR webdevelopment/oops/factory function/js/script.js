// factory function

//creating the factory function.

function createperson(name){
    // return function were call here
    return{
        name,
        //function were sorted like this.
        greeting(){
            let msg=`my name is ${this.name}`;// in this function. function as created into object so person is also a object so inside object call another object so we put "this" keyword. it is used to select the object word.
            console.log(msg);
    
        }

    };
}

let giri=createperson("giri");// in this line we gave the person name into dynamic
let nandhini=createperson("nandu");
giri.greeting(); // it's call the function
nandhini.greeting();
    