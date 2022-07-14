const ciphers = string => {
    string = string.toLowerCase().split('')
    for(i in string) {
        if(string[i].charCodeAt() < 123 && string[i].charCodeAt() >= 97) {
            string[i] = String.fromCharCode(((string[i].charCodeAt() + 13 - 19) % 26) + 97) //+13 as per the cipher rules, -19 to shift alphabet character codes so that 'a'.charCodeAt is divisible by 26, %26 to get codes between 0-25, +97 to shift codes back to lowercase letter ranges.
        }
    }
    return string.join('')
}
console.log(ciphers(ciphers('I love cryptography!')))
console.log(ciphers('a b c d e f g h i j k l m n o p q r s t u v w x y z'))