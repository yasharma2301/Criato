import { useState, createContext, useMemo, useContext, useEffect } from 'react';
import { orderBy } from '../Utility/Utility';
import { PROMOTED, OPEN, RATING_HTL, DELIVERY_EARLIEST, COST_LTH, RATING, COST_FOR_TWO, DELIVERY } from '../components/Constants'

// React context for restaurants and related filters
export const RestaurantContext = createContext();

// wrapper function for useContext hook
export function useRestaurant() {
    return useContext(RestaurantContext);
}

// Custom hook, receives initial data from via server side rendering
export function RestaurantProvider({ children, initialData }) {

    // sort initial data using custom order by fucntion to push the closed restraunts at end and promoted at start
    const sortedInitialData = orderBy(initialData, [
        { key: OPEN, inverse: true },
        { key: PROMOTED, inverse: true }
    ])
    const [restaurants, setRestraunts] = useState(sortedInitialData || []);

    // get cuisines from all the restraunts and populate under filters section
    const cuisinesData = [...new Set(initialData.reduce((acc, restaurant) => [...restaurant?.cuisine, ...acc], []))]
        .map(cuisineData => ({
            checked: false,
            cuisine: cuisineData
        }));
    const [cuisines, setCuisines] = useState(cuisinesData)

    // query for searching by name
    const [searchQuery, setSearchQuery] = useState([])
    const addToSearch = (search) => setSearchQuery(prevSearch => (prevSearch.filter(s => s === search).length > 0 ? prevSearch : [search, ...prevSearch]))
    const removeFromSearch = (search) => setSearchQuery(prevSearch => prevSearch.filter(prev => prev.toLowerCase() !== search.toLowerCase()))

    // query for sorthing by different methods
    const [sortQuery, setSortQuery] = useState('')

    // run useEffect as and when query paramters change
    useEffect(() => {

        const filterCuisine = sortedInitialData.filter(data => {
            if (cuisines.length < 1) return true;
            let flag = false;
            let presenet = false;

            for (let i = 0; i < cuisines.length; i++) {
                const cuisineData = cuisines[i].cuisine;
                const cuisineFlag = cuisines[i].checked;

                if (cuisineFlag) {
                    presenet = true;

                    if (data.cuisine.join(' ').toLowerCase().includes(cuisineData.toLowerCase())) {
                        flag = true;
                        break;
                    }
                }
            }
            return !presenet ? true : flag;
        });

        const searchData = filterCuisine.filter(data => {
            if (searchQuery.length < 1) return true;

            for (let i = 0; i < searchQuery.length; i++) {
                if (data.name.toLowerCase().includes(searchQuery[i].toLowerCase())) {
                    return true;
                }
            }
            return false;
        });

        let data;

        if (sortQuery === RATING_HTL)
            data = orderBy(searchData, [{ key: OPEN, inverse: true }, { key: RATING, inverse: true }, { key: PROMOTED, inverse: true }])
        else if (sortQuery === COST_LTH)
            data = orderBy(searchData, [{ key: OPEN, inverse: true }, { key: COST_FOR_TWO, inverse: false }, { key: PROMOTED, inverse: true }])
        else if (sortQuery === DELIVERY_EARLIEST)
            data = orderBy(searchData, [{ key: OPEN, inverse: true }, { key: DELIVERY, inverse: false }, { key: PROMOTED, inverse: true }])
        else if (sortQuery === '')
            data = searchData;

        setRestraunts(data)

    }, [sortQuery, searchQuery, cuisines])

    return (
        <RestaurantContext.Provider value={{ restaurants, setRestraunts, cuisines, setCuisines, sortQuery, setSortQuery, searchQuery, addToSearch, removeFromSearch }}>
            {children}
        </RestaurantContext.Provider >
    );
}
