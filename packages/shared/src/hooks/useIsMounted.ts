import { useRef } from 'react'
import { useLayoutEffect } from './useLayoutEffect.js'

export const useIsMounted = () => {
  const isMounted = useRef(false)
  useLayoutEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}
