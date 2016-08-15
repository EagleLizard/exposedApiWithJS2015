let myClass = require('./myClass');

let testValues = [
  1,2,3,4,5
];

main();

function main(){
  myClass.getMyClasses(testValues)
         .forEach(c=>console.log(c.num));;
}