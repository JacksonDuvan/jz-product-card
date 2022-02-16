import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
    product: Product
    onChange?: ( args: onChangeArgs ) => void,
    value?: number,
    initialValues?: InitialValues
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)
    const maxCount = initialValues?.maxCount

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        const _value = maxCount ? Math.min(newValue, maxCount) : newValue
        setCounter(_value)
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value || 0)
    }

    useEffect(() => {
        if(!isMounted.current) return 
        setCounter(value)
    },[value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return { 
        counter, 
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter, 
        maxCount,

        increaseBy,
        reset,
    }
}
