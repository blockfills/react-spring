import { is, isAnimatedString } from '@react-spring/shared'
import { AnimatedType } from './types.js'
import { AnimatedArray } from './AnimatedArray.js'
import { AnimatedString } from './AnimatedString.js'
import { AnimatedValue } from './AnimatedValue.js'
import { getAnimated } from './Animated.js'

/** Return the `Animated` node constructor for a given value */
export function getAnimatedType(value: any): AnimatedType {
  const parentNode = getAnimated(value)
  return parentNode
    ? (parentNode.constructor as any)
    : is.arr(value)
    ? AnimatedArray
    : isAnimatedString(value)
    ? AnimatedString
    : AnimatedValue
}
