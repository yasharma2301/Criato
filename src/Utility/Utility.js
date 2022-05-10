/**
 * [Function to apply chaining of multiple sort functionalities]
 * @param  {Array} array [array of objects]
 * @param {Array} sortData [array of objects containing sort logic]
 * @return {Array}  [sorted array based on sort logic provided]
 */
export const orderBy = (array, sortData) => {
    const objectArray = array.map(a => ({ ...a }));

    sortData.map(data => {
        data.uniques = Array.from(new Set(objectArray.map(obj => obj[data.key])));

        data.uniques = data.uniques.sort((a, b) => {
            if (typeof a == 'string') {
                return data.inverse ? b.localeCompare(a) : a.localeCompare(b);
            }
            else if (typeof a == 'number') {
                return data.inverse ? b - a : a - b;
            }
            else if (typeof a == 'boolean') {
                let x = data.inverse ? (a === b) ? 0 : a ? -1 : 1 : (a === b) ? 0 : a ? 1 : -1;
                return x;
            }
            return 0;
        });
    });


    const weightOfObject = (obj) => {
        let weight = '';
        sortData.map(order => {
            let paddding = `${order.uniques.length}`.length;
            weight += order.uniques.indexOf(obj[order.key]).toString().padStart(paddding, '0');
        });
        return weight;
    }

    objectArray.sort((a, b) => {
        return weightOfObject(a).localeCompare(weightOfObject(b));
    });

    return objectArray;
}