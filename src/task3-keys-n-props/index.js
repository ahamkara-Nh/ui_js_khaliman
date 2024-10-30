/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const result = {};

    // Перебираем все значения объекта
    Object.values(obj).forEach(value => {
        const type = typeof value;
        // Увеличиваем счетчик для данного типа
        result[type] = (result[type] || 0) + 1;
    });

    return result;
};
