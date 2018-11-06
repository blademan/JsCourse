//.push() add item in the end

let a =[2, 7];

a.push('hi');
a.push(65);
console.log(a);

// .pop()  deleted last item

let b = a.pop();

console.log(a);
console.log(b);

// shift() deleted first number

let izdzestaisNumurs = a.shift();
console.log(a);
console.log(izdzestaisNumurs);

// unshift add item in the start

a.unshift('TeUnshit');
console.log(a);


//split slice item for massive

let f = 'Hi, my, name, ed';

let splitMasivs = f.split(',');
console.log(splitMasivs);


// join add a bit of numbers to numbers or other characters
console.log(splitMasivs.join('**'));

//slice   Cuts from to

let massivsCipari = [1, 2, 3, 4, 5];
let g = massivsCipari.slice(0,2);  // first nr from, second nr to
console.log(g);

////

let destrutizacija = [1, 2, 4, 5, 7];

let [ as, cs, ss]= destrutizacija;

console.log(as,cs, ss);





