module.exports = {
  getMyClass: getMyClass,
  getMyClasses: getMyClasses
};

class MyClass{
  constructor(n){
    this.n = n;
  }
  get num(){
    return this.n;
  }
}

function getMyClass(n){
  return new MyClass(n);
}

function getMyClasses(arr){
  return arr.map((n)=>getMyClass(n));
}