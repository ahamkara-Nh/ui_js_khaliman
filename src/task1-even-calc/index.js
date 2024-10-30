/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((sum, current) => {
        return current % 2 === 0 ? sum + current : sum;
    }, 0);
};
