// Inches to Feet convater

function inchTOFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const amrInches = 68;
const amrFeet = inchTOFeet(amrInches);
console.log(amrFeet);

const frdInches = 80;
const frdFeet = inchTOFeet(frdInches);
console.log(frdFeet);