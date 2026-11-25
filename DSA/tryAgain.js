const sum=(arr)=>{
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    return total;
}
// console.log(sum([1,2,3]));

const largest=(arr)=>{
    let big=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>big){
            big=arr[i];
        }
    }
    return big;
}
// console.log(largest([1,2,33,4,5]));

const smallest=(arr)=>{
    let small=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    return small;
}
// console.log(smallest([2,1,43,5,0.5,-2]));

const largestSmallest=(arr)=>{
    let s=arr[0];
    let b=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>b){
            b=arr[i];
        }
        if(arr[i]<s){
            s=arr[i];
        }
    }
    return `largest ${b}
smallest ${s}`;
}
// console.log(largestSmallest([3,2,4,-1,55,33]));

const secondLargest=(arr)=>{
    let l=-Infinity;
    let sl=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>l){
            sl=l;
            l=arr[i];
        }
    }
    return sl;
}
console.log(secondLargest([66,21,1,4,33,88]));

const secondSmallest=(arr)=>{
    let s=Infinity;
    let ss=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<s){
            ss=s;
            s=arr[i];
        }
    }
    return ss;
}
// console.log(secondSmallest([2,7,1,4,33,88]));