export const isIterable = (o) => isPlaintObject(o) && !!o[Symbol.iterator]

export const isPlaintObject = (o) => typeof o === 'object' && o !== null

export const isNumber = (o) => typeof Number(o) === 'number'

export const isUndef = (o) => typeof o === 'undefined' || o === null
