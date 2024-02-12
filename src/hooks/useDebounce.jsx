import { debounce } from "lodash"
import { useEffect, useMemo, useRef } from "react"


const useDebounce = (cb) => {

    const ref = useRef();

    useEffect(()=>{
        ref.current = cb

    },[cb])

    const deboucedCallback = useMemo(()=>{
        const fn = ()=>{
            ref?.current?.()
        }

        return debounce(fn,1000)

    },[])


    
  return deboucedCallback
}

export default useDebounce
