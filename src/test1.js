let arr = [1,2,3,4,5,6,7], id = 2;

//  expected output = [1,3,4,5,6,7]
console.log("find: ",arr.find(e => e === id));
console.log("index of: ", arr.indexOf(id));
// console.log("filter: ",arr.filter(e => e === id));

console.log(arr.splice(2,1), arr);
// let arr1 = arr.splice(arr.indexOf(id),1);
// console.log(arr1);