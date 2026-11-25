//      ARRAY PROBLEMS

const sum=(arr)=>{
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    return total;
}

// console.log(sum([1,2,3,4,5]));

const largets=(arr)=>{
    let big=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>big){
            big=arr[i];
        }
    }
    return big;
}

// console.log(largets([2,44,3,66,9,99]));

const smallest=(arr)=>{
    let small=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    return small;
}

// console.log(smallest([-1,2,9,6,5,4,-3]));

const largestSmallest=(arr)=>{
    let small=arr[0];
    let big=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>big){
            big=arr[i];
        }
        if(arr[i]<small){
            small=arr[i];
        }
    }
    return[
        big,
        small
    ]
}

// console.log(largestSmallest([1,2,3,88,4,5,-1]));

const secondLargest=(arr)=>{
    let largest=-Infinity;
    let second=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            second=largest;
            largest=arr[i]; 
        }
        else if(arr[i]>second && arr[i]<largest){
            second=arr[i];
        }
    }
    return second;
}

// console.log(secondLargest([2,3,4,1,6,7,9,8,11,15,-1,100,-3]));

const secondSmallest=(arr)=>{
    let smallest=Infinity;
    let second=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            second=smallest;
            smallest=arr[i];
        }
        else if(arr[i]<second && arr[i]>smallest){
            second=arr[i];
        }
    }
    return second;
}

console.log(secondSmallest([-1,2,3,4,1,6,7,9,8,-100,11,-3]));

const reverse=(arr)=>{
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

// console.log(reverse([1,2,3,4,5,6,7,8,9,0]));

const reverse1=(arr)=>{
    let reversed;
    for(let i=0;i<arr.length/2;i++){
        reversed=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=reversed;
    }
    return reversed;
}

// console.log(reverse([1,2,3,4,5,6,7,8,9,0]));

const countEvenOdd=(arr)=>{
    let countEven=0;
    let countOdd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            countEven++;
        }
        else{
            countOdd++;
        }
    }
    return[
        countEven,
        countOdd
    ]
}

// console.log(countEvenOdd([1,2,3,4,5,-1,-2]));

const average=(arr)=>{
    let total=0;
    let avg=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    avg=total/arr.length;
    return avg;
}

// console.log(average([1,2,3,4,5,6]));

const duplicate=(arr)=>{
    let unique=[];
    for(let i=0;i<arr.length;i++){
        let dupe=false;
        for(let j=0;j<unique.length;j++){
            if(arr[i]===unique[j]){
                dupe=true;
                break;
            }
        }
        if(dupe===false){
            unique[unique.length]=arr[i];
        }
    }
    return unique;
}

// console.log(duplicate([1,2,3,1,2,4,5,5,6,7,8]));

const duplicate1=(arr)=>{
    let k=0;
    for(let i=0;i<arr.length;i++){
        let flag=false;
        for(let j=0;j<i;j++){
            if(arr[i]===arr[j]){
                flag=true;
                break;
            }
        }
        if(flag===false){
            arr[k]=arr[i];
            k++;
        }
    }
    arr.length=k
    return arr;
}

// console.log(duplicate1([1,2,3,1,2,4,5,5,6,7,8,8,9,30,9]));

const duplicate2=(arr)=>{
    let unique = [];
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] === undefined) {
            unique[unique.length] = arr[i];
            seen[arr[i]] = true;
        }
    }
    return unique;
}

// console.log(duplicate1([1,2,3,1,2,4,5,5,6,7,8,8,9,30,9]));

const duplicateCount=(arr)=>{
    let unique=[];
    let count=0;
    for(let i=0;i<arr.length;i++){
        let dupe=false;
        for(let j=0;j<unique.length;j++){
            if(arr[i]===unique[j]){
                dupe=true;
                break;
            }
        }
        if(dupe===false){
            unique[unique.length]=arr[i];
        }else{
            count++;
        }
    }
    return count;
}

// console.log(duplicateCount([1,2,3,1,2,4,5,5,6,7,8,8,9,30,9]));

const moveZeroToEnd=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            result.push(arr[i]);
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(moveZeroToEnd([0,1,2,0,0,3,4,0]));

const moveZeroToBegining=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            result.push(arr[i]);
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            result.unshift(arr[i]);
        }
    }
    return result;
}

// console.log(moveZeroToBegining([0,1,2,0,0,3,4,0]));

const moveZeroToEnd1=(arr)=>{
    let k=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            let temp=arr[i];
            arr[i]=arr[k];
            arr[k]=temp;
            k++;
        }
    }
    return arr;
}

// console.log(moveZeroToEnd1([0,1,2,0,0,3,4,0]));

const moveZeroToBegining1=(arr)=>{
    let k=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            let temp=arr[i];
            arr[i]=arr[k];
            arr[k]=temp;
            k++;
        }
    }
    return arr;
}

// console.log(moveZeroToBegining1([0,1,2,0,0,3,4,0]));

const missingNumber=(arr)=>{
    let n=arr.length+1;
    let sum=0;
    let totalsum;
    let missingnumber;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    totalsum=n*(n+1)/2;
    missingnumber=totalsum-sum;
    return missingnumber;
}

// console.log(missingNumber([1,2,3,5,6,7,8]));

const missingNumber1=(arr)=>{
    let n=arr.length+1;
    let f=arr[0];
    let l=arr[arr.length-1];
    let sum=0;
    let totalsum;
    let missingnumber;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    totalsum=n*(f+l)/2;
    missingnumber=totalsum-sum;
    return missingnumber;
}

// console.log(missingNumber1([10,20,30,50,60]));

const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([2,1,5,4,3,9,33]));

const SelectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return arr;
}

// console.log(SelectionSort([2,1,5,4,3,9,33]));

const insertionSort=(arr)=>{
    for (let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key;
    }
    return arr;
}

// console.log(insertionSort([2,1,5,4,3,9,33]));

const binarySearch=(arr,target)=>{
    let left=0;
    let right=arr.length-1;
    for(;left<=right;){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return `found at index ${mid}`;
        }
        if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return;
}

// console.log(binarySearch([10,20,30,40,50,60,70,80],50));

const linearSearch=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return `found at index ${i}`;
        }
    }
    return;
}

// console.log(linearSearch([10,20,30,40,50,60,70,80],50));

const rotate=(arr)=>{
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        let lastvalue=arr[arr.length-1];
        for(let j=arr.length-1;j>0;j--){
            arr[j]=arr[j-1];
        }
        arr[0]=lastvalue;
        console.log(arr);
    }
}

// rotate([1,2,3,4,5]);

const countUpp=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        let char=arr[i];
        if(char>="A"&&char<="Z"){
            count++;
        }
    }
    return count;
}

// console.log(countUpp(["Hamaz","Anwar","Ameer","Arun","Afna","Nihala"]));

const countUppAll=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
        for(let j=0;j<str.length;j++){
            let char=str[j];
            if(char>="A"&&char<="Z"){
                count++;
            }
        }
    }
    return count;
}

// console.log(countUppAll(["HamaZ","AnwAr","AMeer","arun","Afna","NihaLa"]));

const countDownAll=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
        for(let j=0;j<str.length;j++){
            let char=str[j];
            if(char>="a"&&char<="z"){
                count++;
            }
        }
    }
    return count;
}

// console.log(countDownAll(["HamaZ","AnwAr","AMeer","arun","Afna","NihaLa"]));

const countCaseAll=(arr)=>{
    let count=0;
    let plus=0;
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
        for(let j=0;j<str.length;j++){
            let char=str[j];
            if(char>="a"&&char<="z"){
                count++;
            }else{
                plus++
            }
        }
    }
    return `capital letters=${plus}
small letters=${count}`;
}

// console.log(countCaseAll(["HamaZ","AnwAr","AMeer","arun","Afna","NihaLa"]));

const removeMiddle=(arr)=>{
    let mid=Math.floor(arr.length/2);
    arr.splice(mid,1);
    return arr;
}

// console.log(removeMiddle(["Hamaz","Anwar","Ameer","Arun","Afna","Nihala"]));

const checkItSort=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

// console.log(checkItSort([1,22,33,3,5]));




// let array=[1,2,3,4,5,2,30];

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// for(let value of array){
//     console.log(value);
// }

// console.log(array.includes(5));
// console.log(array.indexOf(2));
// console.log(array.lastIndexOf(2));

// let result=array.find((value) => {
//     return value >20;
// });
// console.log(result);

// let result=array.findIndex((value) => {
//     return value >20;
// });
// console.log(result);

// let mySet =new Set(array);
// console.log(array);
// mySet.add(2);
// mySet.add(333);
// mySet.delete(333);
// mySet.clear();
// console.log(mySet.has(333));
// console.log(mySet.has(2));
// console.log(mySet.size);
// console.log(mySet);
// let setArray=[...mySet];
// console.log(setArray);


// let myMap= new Map();
// myMap.set("name","hamaz");
// myMap.set("age",19);
// console.log(myMap.get("name"));
// console.log(myMap.has("age"));
// console.log(myMap.has("place"));
// myMap.delete("age");
// console.log(myMap.size);
// console.log([...myMap.keys()]);
// console.log([...myMap.values()]);
// console.log([...myMap.entries()]);
// console.log(myMap);



//      STRING PROBLEMS


// let str="hamaz";
// console.log(str);
// console.log(str[0]);
// console.log(str[str.length-1]);
// console.log(str.length);

// let str="hello"
// str[0]="y";
// str="y"+str.slice(1);
// str=str.slice(0,2)+"y"+str.slice(3);
// str=str.slice(0,5)+"y"+str.slice(6);
// console.log(str);
// console.log(str[0].toUpperCase()+str.slice(1));

// let name = "   hAMAZ anWAR   ";
// let email = "   HAMAZ@GMAIL.COM   ";
// const fix=(name, email)=>{
//     let cleanName= name.trim().toLowerCase()
//     cleanName="H"+cleanName.slice(1)
//     cleanName=cleanName.slice(0,5)+" A"+cleanName.slice(6)
//     let cleanEmail= email.toLowerCase().trim()

//     return (`Name :${cleanName} 
// Email :${cleanEmail}`);
    
// }
// console.log(fix(name, email));

// let str="html, css, python";
// console.log(str);
// str=str.replace("python","js");
// console.log(str);

// let str="what a moment";
// console.log(str.indexOf("a"));

// let str="hello world";
// let result=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ");
// console.log(result);

// let str1="mern";
// let str=`hamaz is a software developer ${str1}`;
// console.log(str);

function compare(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

// console.log(compare("hello","HELLO"));

const traversalString=(str)=>{
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
}

// traversalString("hamaz anwar");

const reverseTraversalString=(str)=>{
    for(let i=str.length-1;i>=0;i--){
        console.log(str[i]);
    }
}

// reverseTraversalString("hamaz anwar");

const reverseString=(str)=>{
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    return reversed;
}

// console.log(reverseString("reverse"));

const vowels=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        let char=str[i].toLowerCase();
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
}

// console.log(vowels("javascript"));

const firstLast=(str)=>{
    let first=str[0];
    let last=str[str.length-1];
    return [
        first,
        last
    ]
}

// console.log(firstLast("first last"));

const countString=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        count++;
    }
    return count;
}

// console.log(countString("count the characters"));

const countSpecific=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a"){
            count++;
        }
    }
    return `here "A" repeats ${count} times`;
}

// console.log(countSpecific("hamaz"));

const checkWord=(str)=>{
    for(let i=0;i<str.length;i++){
        let contain="javascript";
        if(str.includes(contain)){
            return true
        }
        else{
            return false
        }
    }
}

// console.log(checkWord("hello javascript"));

const palindrome=(string)=>{
    str=string.toString();
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    if(str===reversed){
        return `yes it is a palindrome`;
    }else{
        return "it is not a palidrome";
    }
}

// console.log(palindrome("mam"));

const frequency=(str)=>{
    let frq=[];
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(frq[char]){
            frq[char]++;
        }else{
            frq[char]=1;
        }
    }
    return frq;
}

// console.log(frequency("hello"));

const vowelsFrequency=(str)=>{
    let count=0;
    let counter=0;
    for(let i=0;i<str.length;i++){
        let char=str[i].toLowerCase();
        if(char>="a"&&char<="z"){
            if("aeiou".includes(char)){
                count++;
            }else{
                counter++;
            }
        }
    }
    return (`vowels=${count}
normal=${counter}`);
}

// console.log(vowelsFrequency("javascript"));

const isAnagram=(str1,str2)=>{
    if(str1.length!==str2.length){
        return false;
    }
    let sort1=str1.split("").sort().join();
    let sort2=str2.split("").sort().join();
    if(sort1===sort2){
        return true;
    }else{
        return false;
    }
}

// console.log(isAnagram("silent","listen"));