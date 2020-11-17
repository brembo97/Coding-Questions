function isBalanced(str){
    let brackets = [];
    let result = 'YES'
    
    for(let i = 0; i < str.length; ++i){
        let char = str[i]
        //LEFT BRACKETS
        if(char === '(') brackets.push(char)
        else if(char === '{') brackets.push(char)
        else if(char === '[') brackets.push(char)
        
        //RIGHT BRACKETS
        else if(char === ')'){
            if(brackets.length === 0 || brackets.pop() !== '('){
                result = 'NO'
                break;
            }
        }
        else if(char === '}'){
            if(brackets.length === 0 || brackets.pop() !== '{'){
                result = 'NO'
                break;
            }
        }
        else if(char === ']'){
            if(brackets.length === 0 || brackets.pop() !== '['){
                result = 'NO'
                break;
            }
        }
        
    }
    return result;
}

isBalanced('[{()}]')