let array=[];

for (let i=1; i<=100000000; i++){
    array.push(i);
}
let len = array.length;

let t1=Date.now();
let x=0;

for (let i=1; i<=len; i++){
    x=x+array[i];
}

console.log('OP: ', Date.now()-t1 );

let t2=Date.now();

let x2=array.reduce((s,i)=>s+i,0);

console.log('FP: ', Date.now()-t2 );