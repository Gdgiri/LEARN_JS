// let hour1=2;
// let hour2=13;
// let hour3=16;
// let hour4=22;

// if(hour1>=0 || hour1<=12){
//     console.log("say , Good-Morning!");
// }

// else if(hour2>=12 && hour2<=16){
//     console.log("say , Good-Afternoon");
// }

// else if(hour3>=13 && hour3<=18){
//     console.log("say , Good-Evening!");
// }

// else if(hour4>=18 && hour4<=24){
//     console.log("say , Good-Night!");
// }

// else{
//     console.log("Non of the above");
// }

// if(hour1>=0 && hour1<=1){
//     console.log("say , Good-Morning!");
// }
// else{
//     console.log("say , Good-Night!");
// }

// next example with real time in js

// let hour=new Date();
// let hrs=hour.getHours();

let hrs=new Date().getHours();

if (hrs>=0 && hrs<=12){
    console.log("say , Good-Morning!");
}

else if(hrs>=12 && hrs<=16){
    console.log("say , Good-Afternoon");

}

else if(hrs>=16 && hrs<=19){

    console.log("say , Good-Evening!");

}

else{
    console.log("say , Good-Night!");
}