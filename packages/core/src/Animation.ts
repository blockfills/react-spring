import { AnimatedValue } from '@react-spring/animated'
import { FluidValue } from '@react-spring/shared'
import { AnimationConfig } from './AnimationConfig.js'
import { PickEventFns } from './types/internal.js'
import { SpringProps } from './types.js'

const emptyArray: readonly any[] = []

/** An animation being executed by the frameloop */
export class Animation<T = any> {
  changed = false
  values: readonly AnimatedValue[] = emptyArray
  toValues: readonly number[] | null = null
  fromValues: readonly number[] = emptyArray

  to!: T | FluidValue<T>
  from!: T | FluidValue<T>
  config = new AnimationConfig()
  immediate = false
}

export interface Animation<T> extends PickEventFns<SpringProps<T>> {}
