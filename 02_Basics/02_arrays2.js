const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//  marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

let all_heroes = marvel_heros.concat(dc_heros); // to add content of another array in the first array, o/p will be an array
console.log(all_heroes);



const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes); // this is shortcut to add all the contents of 2nd array to 1st array like above but we can add more arrays like this.


// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_real_array = another_array.flat(Infinity); // We need to specify depth here while using flat method to add contents of array inside array. 1,2, 3 or Infinity also

console.log(another_real_array);


console.log(Array.isArray("Bhumesh"))
console.log(Array.from("Bhumesh"))
console.log(Array.from({name: "Bhumesh"})) // interesting -> It will provide empty array as we need to specify key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));