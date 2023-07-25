const students=[8,1,3];

students.sort()

console.log(students);

students.sort((a,b)=>{
    return b-a;
})

console.log(students);

students.reverse();

console.log(students);

let student=[
    {id:5,name:"Giri"},
    {id:3,name:"Cindral"},
    {id:2,name:"Bavan"},
    {id:1,name:"Abi"},
]
student.sort((a,b)=>{
    nameA=a.name.toLowerCase();
    nameB=b.name.toLowerCase();

    if (nameA<nameB) return -1;
    if (nameA>nameB) return 1;
    return 0;
});
console.log(student);
