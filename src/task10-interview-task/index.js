/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    // Если число одноразрядное, возвращаем его
    if (num < 10) return num;
    
    // Функция для перемножения цифр числа
    const multiplyDigits = (n) => {
        return String(n)
            .split('')
            .reduce((acc, digit) => acc * Number(digit), 1);
    };
    
    // Перемножаем цифры, пока не получим одноразрядное число
    let result = num;
    while (result >= 10) {
        result = multiplyDigits(result);
    }
    
    return result;
};
