import { Globals } from '@react-spring/core'
import { unstable_batchedUpdates } from 'react-dom'
import { createStringInterpolator, colors } from '@react-spring/shared'
import { createHost } from '@react-spring/animated'
import { applyAnimatedValues } from './applyAnimatedValues.js'
import { AnimatedStyle } from './AnimatedStyle.js'
import { WithAnimated } from './animated.js'
import { primitives } from './primitives.js'

Globals.assign({
  batchedUpdates: unstable_batchedUpdates,
  createStringInterpolator,
  colors,
})

const host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props,
})

export const animated = host.animated as WithAnimated
export { animated as a }

export * from './animated.js'
export * from '@react-spring/core'
