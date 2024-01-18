import { useEffect } from 'react'

export const useMount = (mount: () => void) => {
  useEffect(mount, [])
}
