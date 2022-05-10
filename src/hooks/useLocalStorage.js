import React, { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem(key)) : null;
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        (typeof window !== 'undefined') && localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}