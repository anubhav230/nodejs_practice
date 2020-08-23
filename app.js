//array 
const arr=['anubhav', 'ankit'];
console.log(arr);
//printing array
//for off loop
for(let name of arr){
    console.log(name);
}
//map() to edit array
console.log(arr.map(names => 'name: '+names));
// method to add new element in array
arr.push('priyanka');
console.log(arr);
//to copy an array
const copyedarray=arr.slice();
console.log(copyedarray);
//spread operator for copying an array
const copyedarray2=[...arr];
console.log(copyedarray2);
// rest operatior to merge multiple argument in to a araay
const toArray = (...args)=>{
    return args;
}
console.log(toArray(1,2,'pankaj',3));

const person = {
    name2: 'srijan',
    age: 25
}
//object desructuring
const pringname = ({name2})=>{
    console.log(name2);
}
pringname(person);
// object desructuring 
const {name2, age} = person;
console.log(name2, age);
// desructuring array
const [element1, element2]=arr
console.log(element1, element2);