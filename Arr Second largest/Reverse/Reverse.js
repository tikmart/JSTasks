function reverseArr(inputAr) {
    let ret = new Array;
    for(let i = inputAr.length-1; i >= 0; i--) {
        ret.push(inputAr[i]);
    }
    return ret;
}

let a = [9,8,7,6,5,4,3]
let b = reverseArr(a);
alert(b)