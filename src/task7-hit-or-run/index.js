/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    // Генерируем случайное целое число в диапазоне [a, b]
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;

    // Функция проверки простого числа
    const isPrime = (num) => {
        // 1 не является простым числом
        if (num <= 1) return false;

        // Проверяем делители до корня из числа
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    };

    // Возвращаем результат в зависимости от того, простое число или нет
    return isPrime(randomNumber) ? 'run' : 'hit';
};
