import { useState, useEffect } from "react";

/**
 *  Define a generic function useDebounce that accepts a value of type T and a delay in milliseconds.
    Return the text after a delay
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debouncedValue
}

/**
 *  Detect clicking outside the container
 */
export function useOutsideDetected(ref: any) {
    const [isOutside, setIsOutside] = useState(false)

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOutside(true)
            } else setIsOutside(false)
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref]);

    return isOutside
}