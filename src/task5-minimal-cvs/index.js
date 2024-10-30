/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    // Храним историю версий массива
    const versions = [initialCommit.slice()];

    return {
        // Возвращает последнюю версию массива
        head() {
            return versions[versions.length - 1];
        },

        // Возвращает всю историю версий
        history() {
            return versions;
        },

        // Добавляет элемент и сохраняет новую версию
        push(element) {
            const newVersion = this.head().slice();
            newVersion.push(element);
            versions.push(newVersion);
        },

        // Удаляет последний элемент и сохраняет новую версию
        pop() {
            const newVersion = this.head().slice();
            const poppedElement = newVersion.pop();
            versions.push(newVersion);
            return poppedElement;
        }
    };
};
