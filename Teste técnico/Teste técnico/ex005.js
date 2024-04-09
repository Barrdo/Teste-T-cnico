function inverterString(str) {
    let reversedString = '';

    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

const minhaString = 'Olá Mundo!';
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); 
