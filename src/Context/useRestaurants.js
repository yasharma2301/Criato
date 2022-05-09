import { useState, createContext, useMemo, useContext } from 'react';

export const RestaurantContext = createContext();

export function useRestaurant() {
    return useContext(RestaurantContext);
}

export function RestaurantProvider({ children, initialData }) {
    const [restraunts, setRestraunts] = useState(initialData);
    const value = useMemo(() => ({ restraunts, setRestraunts }), [restraunts]);

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    );
}
