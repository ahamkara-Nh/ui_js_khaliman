/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const filtered = [];
    
    // Собираем отфильтрованные элементы
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    
    // Если нужно модифицировать исходный массив
    if (inplace) {
        array.length = 0; // Очищаем исходный массив
        for (let i = 0; i < filtered.length; i++) {
            array.push(filtered[i]);
        }
        return array;
    }
    
    return filtered;
};
