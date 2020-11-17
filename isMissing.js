function missingLetters(str){
    let clean_string = [];
    let result = [];
    const alphabet = 'abcdefghijklmnopqrstuvxyz'

    for(let char of str){
        let to_lower = char.toLowerCase()
        if(alphabet.includes(to_lower)){
            clean_string.push(to_lower)
        }
    
    }
    
    for(let char of alphabet){
        if(!clean_string.includes(char)){
            result.push(char)
        }
    }
    
    return result.join('');
}

missingLetters('AEIOU')
