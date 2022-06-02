import { useState } from 'react'

type useSequenceReturn<T> = [ T, () => void, () => void ]

export default function useSequence<T>(...values:T[]):useSequenceReturn<T>{
    const [index, setIndex] = useState(0)
    
    const nextValue = () => {
        if(index === values.length - 1){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }

    const previousValue = () => {
        if(index === 0){
            setIndex(values.length - 1)
        }
        else{
            setIndex(index - 1)
        }
    }

    return [values[index], nextValue, previousValue]
}