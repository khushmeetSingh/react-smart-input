/*
KEY FOR FORMAT:
    # stands for a alphabet
    @ stands for special character
    9 stands for a number

Nice to have:
    1. support for vowels
    2. having distinction in non zero and a zero
    3. special characters in different scenarios
    4. preset formats

*/

import { FORMAT_PLACEHOLDERS } from "@/constants/formatValues";

const isFormatted = (val: string, format: string) => {
    let res=true;
    for (var i = 0; i < val.length && i < format.length && res; i++) {
        if(!FORMAT_PLACEHOLDERS.includes(format[i])){
            res = res && (format[i] === val[i]);
        }  
    }
    return res;
}

export const format = (val: string, format: string, caretPos: number) => {
    // console.log(`Is the string formatted - ${isFormatted(val,format)} for val : ${val}`);
    // if(val.length > format.length){
    //     return val;
    // }
    let res = val;
    for(var i=caretPos ; i < val.length && i < format.length ; i++){
        if(!FORMAT_PLACEHOLDERS.includes(format[i])){         
            console.log(`The string to be removed delimiter is ${res.substring(caretPos)}`);   
            res = `${res.substring(0,caretPos)}${res.substring(caretPos).replaceAll(format[i],'')}`;
            // console.log(`The delimiter is ${format[i]} and res is ${res} and i is ${i}`);
        }
    }
    for (var i = 0; i < val.length && i < format.length; i++) {
        if (!FORMAT_PLACEHOLDERS.includes(format[i]) && format[i] !== res[i]) {
            res = `${res.substring(0,i)}${format[i]}${res.substring(i)}`;
        }
    }

    //code for caret position:

    let caretCorr = 0;
    console.log(`valLength is ${val.length} and the caret pos is ${caretPos}`);
    if(val.length === caretPos)
        for(let i=0;i<caretPos;i++)
        {
            if(!FORMAT_PLACEHOLDERS.includes(format[i])){
                caretCorr++;
            }
        }
    let newCaretPos = caretPos + caretCorr;
    console.log(`new caret pos is ${newCaretPos}`);
    
    //(11)234-
    return {res , newCaretPos};
}