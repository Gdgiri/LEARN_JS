const dailyroutine=["wakeup","eat","sleep"];

console.log(dailyroutine);

for(routine of dailyroutine){
    console.log(routine);
}

for(routine in dailyroutine){
    console.log(routine);
}

dailyroutine.forEach(function(routine){
    console.log(routine);
})

// also we write program like this

console.log("");

dailyroutine.forEach((routine)=>{
    console.log(routine);
})