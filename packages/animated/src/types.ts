import { AnimatedArray } from './AnimatedArray.js'
import { AnimatedValue } from './AnimatedValue.js'

export type AnimatedType<T = any> = Function & {
  create: (
    from: any,
    goal?: any
  ) => T extends ReadonlyArray<number | string>
    ? AnimatedArray<T>
    : AnimatedValue<T>
}
