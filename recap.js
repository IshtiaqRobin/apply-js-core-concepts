
// // 1. variable
// var myName = 'Ishtiaq Robin';
// console.log(myName);

// // 2. conditions
// var myIncome = 4500000;

// if(myIncome < 400000){
//     console.log('allahr kache aro caite hobe');
// }
// else if(myIncome == 500000){
//     console.log('alhamduilliah valo income hocche.');
// }
// else{
//     console.log('aro cesta korte hobe');
// }

// // 3. multi-stage-conditons
// var myMoney = 80000;
// var iphonePrice = 170000;
// var oneplusPhone = 35000;
// var xiaomiPhone = 25000;
// var samsungPhone = 20000;
// var realmePhone = 15000;
// var oppoPhone = 12000;
// var infinixPhone = 11000;

// if(iphonePrice < myMoney){
//     console.log('ami iphone kinbo');
// }
// else if(oneplusPhone < myMoney){
//     console.log('ami iphone kinbo nah, oneplus phone kinbo');
// }
// else if(xiaomiPhone < myMoney){
//     console.log('ami xiaomi phone kinbo');
// }
// else if(samsungPhone < myMoney){
//     console.log('ami onno kono phone kinbo nah, samsung is the best phone');
// }
// else{
//     console.log('samsung kinte na parle bari cole zabo tai onno phone kintam nahh');
// }

/*
// 4. array
var tableItemsName = ['book', 'pen', 'notebook', 'mouse'];
console.log(tableItemsName);

// 5. array items length
var itemsNumbers = tableItemsName.length
console.log(itemsNumbers);

var singleItems = tableItemsName[2];
console.log(singleItems);

tableItemsName[2] = 'signeture pen';
console.log(tableItemsName);

// 6. add last elements
tableItemsName.push('keyboard', 'watch', 'shopis');
console.log(tableItemsName);

// 7. remove last elements
tableItemsName.pop();
console.log(tableItemsName);

// 8. add first elements
tableItemsName.unshift('charger');
console.log(tableItemsName);

// 9. remove first elements
tableItemsName.shift();
console.log(tableItemsName); 
*/

// 10. while loop
// var myAge = 20;
// var marriageAgeStart = 18;

// while(myAge <= 35){
//     console.log('amr biyer boyos hoye geche, biye kore felte hobe');
//     console.log(myAge);
//     myAge++
// }

// 11. for loop
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 12. for loop [number count to reverse way]
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// 13. function
function moon() {
    console.log('Ishtiaq Robin');
    console.log('I am students of Rajendra collage');
    console.log('I live in Faridpur');
}
moon();

// 14. objects
const myLaptop = {
    name: 'HP',
    model: '1043 tx',
    price: '81 k',
    color: 'silver',
    processor: 'i5'
}
console.log(myLaptop);
console.log(myLaptop.model);

myLaptop.color = 'sliver mat'