// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

destructivelyRemoveFirstCat();

function appendCat(name){
    var newArray = cats.slice()
    newArray.push(name)
    return newArray
}
appendCat("Broom");

function prependCat(name){
    var newwArray = cats.slice()
    newwArray.unshift(name)
    return newwArray
}

prependCat("Arnold");

function removeLastCat(name){
    var newArrray = cats.slice()
    newArrray.pop(name)
    return newArrray
}

removeLastCat();

function removeFirstCat(name){
    var newArrraay = cats.slice()
    newArrraay.shift(name)
    return newArrraay
}

removeFirstCat();