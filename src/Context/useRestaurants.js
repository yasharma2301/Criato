import { useState, createContext, useMemo, useContext } from 'react';
import { orderBy } from '../Utility/Utility';
import {SEARCH, SORT, FILTER, PROMOTED, OPEN} from '../components/Constants'

export const RestaurantContext = createContext();
export const QueryContext = createContext();

export function useRestaurant() {
    return useContext(RestaurantContext);
}

export function useQuery() {
    return useContext(QueryContext);
}

export function RestaurantProvider({ children, initialData }) {
    const orderedData = orderBy(initialData, [
        { key: OPEN, inverse: true },
        { key: PROMOTED, inverse: true }
    ]);
    const [restaurants, setRestraunts] = useState(orderedData);
    const [cuisines, setCuisines] = useState([...new Set(restaurants.reduce((acc, restaurant) => [...restaurant?.cuisine, ...acc], []))])
    const restaurantValue = useMemo(() => ({ restaurants, setRestraunts, cuisines }), [restaurants]);

    const initialQuery = { search: [], sort: '', filter: [] }
    const [query, setQuery] = useState(initialQuery)
    const processQuery = (type, data) => {
        switch (type) {
            case SEARCH:
                setQuery(prevQuery => ({ search: [...data, ...prevQuery.search] }))
                break;
            case SORT:
                setQuery({ ...query, sort: data })
                break;
            case FILTER:
                setQuery(prevQuery => ({ filter: [...data, ...prevQuery.filter] }))
                break;
            default:
                break;
        }
    }
    const queryValue = useMemo(() => { query, processQuery }, [query])

    return (
        <RestaurantContext.Provider value={restaurantValue}>
            <QueryContext.Provider value={queryValue}>
                {children}
            </QueryContext.Provider>
        </RestaurantContext.Provider>
    );
}
