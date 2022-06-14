import { useState } from 'react'

type useToggleReturn = [ boolean, () => void ]

export default function useToggle(initialValue?:boolean):useToggleReturn{
    const [boolean, setBoolean] = useState(initialValue ?? false)
    const toggleBoolean = () => setBoolean(!boolean)

    return [boolean, toggleBoolean]
}