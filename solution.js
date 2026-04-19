/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map ([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    let brackets = [];

    for(const char of s){
        //ПРИМЕР
        //если ключ ')' есть в map И значение этого ключа в map (т.е. '(') равняется предыдущему символу, значит удаляем последний элемент массива
        if(map.has(char) && map.get(char) == brackets[brackets.length-1]) brackets.pop()
        else brackets.push(char);
    }
    return brackets.length == 0;
};
