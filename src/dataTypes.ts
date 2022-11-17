type TupleToObject<T extends readonly any[], F> = {
  [K in T[number]]: F;
};

export const dataTypes = (function () {
  const types = [
    "isString",
    "isNumber",
    "isBoolean",
    "isArray",
    "isNull",
    "isArrayBuffer",
    "isBigInt",
    "isBigInt64Array",
    "isBigUint64Array",
    "isDataView",
    "isDate",
    "isError",
    "isEvalError",
    "isFloat32Array",
    "isFloat64Array",
    "isFunction",
    "isGenerator",
    "isInt16Array",
    "isInt32Array",
    "isMap",
    "isInt8Array",
    "isObject",
    "isPromise",
    "isRegExp",
    "isSet",
    "isSymbol",
    "isSyntaxError",
    "isTypeError",
    "isUint16Array",
    "isUint32Array",
    "isUint8Array",
    "isUint8ClampedArray",
    "isURIError",
    "isWeakMap",
    "isWeakRef",
    "isUndefined",
    "isArguments",
  ] as const;

  const o = {} as TupleToObject<typeof types, (arg: any) => boolean>;

  types.forEach((item) => {
    o[item] = function (v) {
      const t = Object.prototype.toString.call(v).slice(8, -1);
      return item.slice(2) === (v?.constructor.name || t);
    };
  });

  return o;
})();
