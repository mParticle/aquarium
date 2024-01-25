import { useEffect } from 'react'

export const useUnMount = (unmount: () => void) => {
  useEffect(() => {
    return () => {
      unmount?.()
    }
  }, [])
}
