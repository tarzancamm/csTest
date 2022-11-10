// Sum Zero
const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] + arr[k] === 0) {
                return true
            }
        }
    }
    return false
}
// console.log(addToZero([1, 2, 3, -2]))
// Time: O(n^2)
// Space: O(1)


// Unique Characters
const hasUniqueChar = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
            return false
        }
    }
    return true
}
// console.log(hasUniqueChar("hello"))
// Time: O(n)
// Space: O(1)


//Pangram Sentence
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let str = 'The quick brown fox jumps over the lazy dog!'

const isPangram = (str) => {
    let string = str.toLowerCase()
    let strLength = string.length

    for (let i = 0; i < strLength; i++) {
        let elem = string[i]
        let index = alphabet.indexOf(elem)
        if (index !== -1) {
            alphabet.splice(index, 1)
        }
    }
    return !alphabet.length
}

// console.log(isPangram(str))
// Time: O(n)
// Space: O(1)


// Longest Word
const findLongestWord = (arr) => {

    let wordLength = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > wordLength){
            wordLength = arr[i].length
        }
    }
    return wordLength
}

// console.log(findLongestWord(["hi", "entrata", "hello"]))
// Time: O(n)
// Space: O(1)