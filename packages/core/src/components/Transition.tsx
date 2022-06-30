import { Valid } from '../types/common.js'
import { TransitionComponentProps } from '../types.js'
import { useTransition } from '../hooks.js'

export function Transition<
  Item extends any,
  Props extends TransitionComponentProps<Item>
>(
  props:
    | TransitionComponentProps<Item>
    | (Props & Valid<Props, TransitionComponentProps<Item, Props>>)
): JSX.Element

export function Transition({
  items,
  children,
  ...props
}: TransitionComponentProps<any>) {
  return useTransition(items, props)(children)
}
