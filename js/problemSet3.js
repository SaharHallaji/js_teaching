const elements = ['a','b','c','d','a','a','b','b','c','c','b','a','h'];
let counted = {};
elements.forEach((i)=> counted[i] = (counted[i] || 0) + 1)
console.log(counted)