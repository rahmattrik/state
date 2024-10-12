import { useCallback, useState } from "react";

export default function useVisibility() {
    const [visibility, setVisibility] = useState({});
    
    const toggle = useCallback((key) => {
        setVisibility((curr) => ({
            ...curr,
            [key]: !curr[key]
        }));
    }, []);

    const reset = useCallback(() => {
        setVisibility({});
    }, [])

    return {state: visibility, toggle, reset};
}