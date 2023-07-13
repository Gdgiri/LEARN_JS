console.log(1|2);

console.log(1&2);

const write_permission=4;

const read_permission=2;

let my_permission=0;

console.log(my_permission|read_permission);

let access=(my_permission|read_permission)?"yes":"no"

console.log(access);