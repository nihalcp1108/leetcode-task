let arr=[1,2,3,2];
let result = arr.filter(a => arr.indexOf(a)==arr.lastIndexOf(a)).reduce((x,y)=>x+y,0)
console.log(result)