let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log([...alphabet]);
 const isPangram = (sentence) => {
    return [...alphabet].every(letter => letter.includes(sentence))
 }