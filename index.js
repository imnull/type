const oStr = Object.prototype.toString;
const T = v => oStr.call(v).slice(8, -1);
const t = v => typeof(v);

const r = {
    typeString: T,
    
    isNull: v => v === null,
    isUndefined: v => t(v) === 'undefined',

    isObject: v => T(v) === 'Object',
    isArray: v => T(v) === 'Array',
    isRegExp: v => T(v) === 'RegExp',

    isFunction: v => t(v) === 'function',
    isNumber: v => t(v) === 'number',
    isString: v => t(v) === 'string',
    isBoolean: v => t(v) === 'boolean',
    isSymbol: v => t(v) === 'symbol',

    isNil: v => r.isNull(v) || r.isUndefined(v),
    isInvalid: v => r.isNil(v) || (r.isNumber(v) && isNaN(v)),
    isInvalidString: v => r.isNil(v) || (r.isString(v) && v.length < 1),
};

module.exports = r;