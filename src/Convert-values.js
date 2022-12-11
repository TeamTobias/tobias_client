
export function convertValues(obj) {
    if (obj === undefined || obj === null) return [];
    return Object.keys(obj).map(function (key) {
        return obj[key];
    });
}