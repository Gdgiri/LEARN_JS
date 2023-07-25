let numbers=[1,2,3,4];

//solution 1 ==>easy methode we use that in project

numbers=[];

//solution 2 ==> this also easy method but storage level higher then solution1.

numbers.length=0;

// solution 3==> this is also good but it takes more storage compare to solution 1 and 2
numbers.splice(0,numbers.length);

// solution 4==> this method is better to do, but it takes more storage comapre to solution 1 , 2 and 3.

while (numbers.length){
    numbers.pop;
}

console.log(numbers);