const Marvel_Heros = ["Thor", "Hulk", "IronMan", "Captain America"]
const Indian_Heros = ["Shaktimaan","Pokemon", "Bheem", "Doremon","Hatori"]
//Marvel_Heros.push(Indian_Heros)
// Marvel_Heros.concat(Indian_Heros)
const Heros = Marvel_Heros + Indian_Heros  // not work for adding arrays in a structured manner
// console.log(Marvel_Heros)

// Spread Operator is used to spread an array or strings 
// example = dropping glass on the floor is perfect example of spread opearor 
// ...spreadOperator


// const All_heros = [...Marvel_Heros, ...Indian_Heros]
// console.log(All_heros);
// console.table(All_heros)


// const Another_Array = [1,2,3,4,5,[7,8,9],10,[23,44,55,[99,100,101]]]
// const Main_Array = Another_Array.flat(Infinity)
// console.table(Main_Array)

// console.log(Array.isArray("Alok")) // check is that element is Array or not
// console.log(Array.from("AlokPandey")) // Convert Elements in Array Form

const s1 = 100
const s2 = 200
const s3 = 300
console.log(Array.of(s1, s2,s3))
