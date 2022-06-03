import { useState } from 'react';

type useBooleanReturn = [boolean, () => void, () => void];
export default function useBoolean(initialValue?:boolean):useBooleanReturn{
    const [boolean, setBoolean] = useState(initialValue ?? false)

    const setBooleanTrue = () => setBoolean(true)
    const setBooleanFalse = () => setBoolean(false)

    return [boolean, setBooleanTrue, setBooleanFalse]
}