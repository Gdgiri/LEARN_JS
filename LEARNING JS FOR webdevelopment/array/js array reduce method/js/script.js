const number=[21,41,32,74,84,2];

let num=number.reduce(function(previousvalue,currentvalue){
    console.log("previousvalue:",previousvalue);
    console.log("currentvalue:", currentvalue);
    return previousvalue+currentvalue;
});
console.log("total value is", num);