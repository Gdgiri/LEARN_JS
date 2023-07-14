let i=0;

while(i<=10){
    if(i%2!==0){
        console.log("odd number of while loop:"+i);
    }
    i++;
}

do{
    if(i%2!==0){
        console.log("odd number of do=while loop:"+i);
    }
    i++;
}while(i<=10);