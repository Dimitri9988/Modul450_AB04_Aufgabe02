const numberArray = [1, 3, 43, 466, 1097, 21304, 33478];
notPalindromWord = "Holztisch";
palindromeWord = "Otto";




const getLastElement = (lastElementArray) => {
    const last = lastElementArray[lastElementArray.length - 1];
    return last
}

getLastElement(numberArray);



const isPalindrome = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const reverseWord = lowerCaseWord.split("").reverse().join("")

    if (reverseWord === lowerCaseWord) {
        return word + " is an palindrom"
    }
    else {
        return word + " is not an palindrom"
    }
}
isPalindrome(palindromeWord);
isPalindrome(notPalindromWord);




function capitalizeWords(capitaliyeStrig) {
    const sort = capitaliyeStrig.split(" ");

    const capitalizedWord = sort.map(word => {
        const firstLetter = word[0].toUpperCase();
        const restWord = word.slice(1).toLowerCase();
        return firstLetter + restWord;


    })

    return capitalizedWord.join(" ");


}





const capitaliyeStrig = "wow wow cool test test2";
const outputCapitalizeWords = capitalizeWords(capitaliyeStrig);
console.log(outputCapitalizeWords);








function lengthOfLongestWord(lengthStrig) {
    const words = lengthStrig.split(" ");


    const lengthedWord = words.map(word => {
        const lengthNumber = word.length;

        console.log(lengthNumber)
        return lengthNumber;


    })
    const sortLengthedWord = lengthedWord.sort(function (a, b) { return b - a; });
    return sortLengthedWord[0];


}

const lengthStrig = "Das ist ein bespiel Satz sehrsehrsehrlang";
const outputLengthWords = lengthOfLongestWord(lengthStrig);
console.log(outputLengthWords);


module.exports = { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord }