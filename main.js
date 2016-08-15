let myClass = require('./myClass');

let testValues = [
  1,2,3,4,5
];

main();

function main(){
  let myClasses = myClass.getMyClasses(testValues);
  myClasses.forEach((c)=>console.log(c.num));
}