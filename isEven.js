// even number check

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(480);
console.log(myNumberIsEven);

const herNumberIsEven = isEven(457);
console.log(herNumberIsEven);

const theyNumberIsEven = isEven(5478505);
console.log(theyNumberIsEven);