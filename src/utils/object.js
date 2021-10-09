import { isPlaintObject } from './type-judge'

export const freeze = (o) => {
  if (isPlaintObject) Object.freeze(o)
}

export const freezeMany = (...objs) => {
  objs.forEach((item) => freeze(item))
}
