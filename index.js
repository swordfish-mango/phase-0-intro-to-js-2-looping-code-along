function writeCards(nameArray) {
    let arr = [];
    for(let i = 0; i <nameArray.length; i++) {
        arr.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
    }
    return arr;
}
function countDown(n) {
    while(n>=0) {
        console.log(n);
        n--;
    }
}