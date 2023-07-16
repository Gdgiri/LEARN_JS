function createperson(name){
    return{
        name,
        greeting(){
            console.log(`my name is ${this.name}`);
        }
    }
}

let giri=createperson("giri");
giri.greeting();

function person(name){
    this.name=name;
    this.greeting=function(){
        console.log(`my name is ${this.name}`);
    }

}

let persons=new person("giri");  

persons.greeting();