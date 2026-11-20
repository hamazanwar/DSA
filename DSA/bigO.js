const test=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(i===3) return arr[i];
    }
}

const test1=(arr)=>{
    return arr[3];
}

// console.time("test");
// console.log(test([1,2,3,4,5]));
// console.timeEnd("test");

// console.time("test1");
// console.log(test1([1,2,3,4,5]));
// console.timeEnd("test1");


const constantExample=(n)=>{        //O(1)
    return (n*(n+1))/2;
}
// console.log(constantExample(3));

const linearExample=(arr)=>{        //O(n)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// linearExample([1,2,3,4,,5]);