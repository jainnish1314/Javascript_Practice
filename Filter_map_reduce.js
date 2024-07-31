const arr=[1,2,3,4,5];

//map Function
const output= arr.map((x)=>x.toString(2));
console.log("using MapFunction\n",output);

//Filter Function
const arr2=[10,1,2,4,6,5,7]
const output1=arr2.filter(isOdd);

function isGreater(x){
return x>5;
}
console.log("using Filter Function\n",output1)

//Reduce Function
const arr3=[7,4,1,2,5,8,9,6,3];
const output2=arr3.reduce(function (acc,curr) {
    acc=acc+curr; //sum
    return acc;
    
},0);//0 is initial value
console.log(output2)

