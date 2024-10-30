/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    // Определяем пару классов для переключения
    const isActive = className.endsWith('_active');
    const defaultClass = isActive ? className.replace('_active', '') : className;
    const activeClass = isActive ? className : `${className}_active`;

    // Находим все элементы с обоими классами
    const defaultElements = document.querySelectorAll(`.${defaultClass}`);
    const activeElements = document.querySelectorAll(`.${activeClass}`);

    // Если нет элементов с переданным классом или его активной версией, прекращаем работу
    if (defaultElements.length === 0 && activeElements.length === 0) {
        return;
    }

    // Обрабатываем элементы с дефолтным классом
    if (defaultElements.length > 0) {
        Array.from(defaultElements).forEach(element => {
            element.classList.remove(defaultClass);
            element.classList.add(activeClass);
        });
    }

    // Обрабатываем элементы с активным классом
    if (activeElements.length > 0) {
        Array.from(activeElements).forEach(element => {
            element.classList.remove(activeClass);
            element.classList.add(defaultClass);
        });
    }
};
