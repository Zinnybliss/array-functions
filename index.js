// QUESTION 1
/**
 * What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
 * List 5 array methods that fall under each of them.
 */
// ANSWER TO QUESTION 1

/**
 * Mutating array methods are those methods that changes the values of the original array. Examples are .pop(), .push(), .copyWithin(), .unShift(), .fill()
 * 
 * Non-mutating array methods are those array methods that returns a new array with the new changes made to an array. It doesn't change the original array. 
 * Examples includes .filter(), .find(), .indexOf(), forEach(), .includes().
 */



// QUESTION 2

/***
 * Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

// ANSWERS TO QUESTION 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Adding kotlin to the end of the array
languages.push("Kotlin")

// Adding "Java" after "Ruby"

languages.splice(languages.indexOf("Ruby")+1, 0, "Java");

// Removing the first element of the array
languages.shift()

// Adding "Scala" and "Swift" to the beginning of the array
languages.unshift("Scala", "Swift")

// Replacing "PHP" with "Go" and "Rust"
languages.splice(languages.indexOf("PHP"), 1, "Go", "Rust")


// QUESTION 3
/**
 * What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
 */
/**
 *  ANSWER TO QUESTION 3
 * The value of fruit would be fruit = ["apple", "mango", "orange"]
 * */
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        console.log(changeFruit(fruit))


// QUESTION 4
/**
 * Write a function that accepts an array of numbers as an argument. 
 * Return the maximum value in the array.
e.g., max([4, 5, 10, -2])
 */

function arrayOfNumbs (numb){
	return Math.max(...numb)
}

console.log(arrayOfNumbs([5, 200, 76, 100, 8 ,10]))


// QUESTION 5 
/**
 * Write a function called valTimesIndex which accepts an array of numbers and returns a new array 
 * with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
 */

let newArray = []
function valTimesIndex (numb) {
    for (let index = 0; index < numb.length; index++){
		numb[index] *= index 
	}
	return newArray.push(numb)
}

let arr = valTimesIndex([0, 5, 10, 24, 1, 0, 6])

console.log(newArray) 