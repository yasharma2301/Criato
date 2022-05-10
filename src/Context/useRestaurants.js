import { useState, createContext, useMemo, useContext, useEffect } from 'react';
import { orderBy } from '../Utility/Utility';
import { SEARCH, SORT, FILTER, PROMOTED, OPEN, RATING_HTL, DELIVERY_EARLIEST, COST_LTH } from '../components/Constants'
import useLocalStorage from '../hooks/useLocalStorage';

export const RestaurantContext = createContext();

export function useRestaurant() {
    return useContext(RestaurantContext);
}

export function RestaurantProvider({ children, initialData }) {
    const sortedInitialData = orderBy(initialData, [
        { key: 'open', inverse: true },
        { key: 'promoted', inverse: true }
    ])
    const [restaurants, setRestraunts] = useState(sortedInitialData || []);

    const cuisinesData = [...new Set(initialData.reduce((acc, restaurant) => [...restaurant?.cuisine, ...acc], []))]
        .map(cuisineData => ({
            checked: false,
            cuisine: cuisineData
        }));
    const [cuisines, setCuisines] = useState(cuisinesData)

    const toggleCuisine = (c) => {
        const cuisine = c.cuisine;
        setCuisines(cuisines.map(item => {
            if (item.cuisine === cuisine) {
                return { ...item, checked: !item.checked };
            }
            return item;
        }));
    }

    const [searchQuery, setSearchQuery] = useState([])
    const addToSearch = (search) => setSearchQuery(prevSearch => (prevSearch.filter(s => s === search).length > 0 ? prevSearch : [search, ...prevSearch]))
    const removeFromSearch = (search) => setSearchQuery(prevSearch => prevSearch.filter(prev => prev.toLowerCase() !== search.toLowerCase()))

    const [sortQuery, setSortQuery] = useState('')


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
            data = orderBy(searchData, [{ key: 'open', inverse: true }, { key: 'rating', inverse: true }, { key: 'promoted', inverse: true }])
        else if (sortQuery === COST_LTH)
            data = orderBy(searchData, [{ key: 'open', inverse: true }, { key: 'costForTwo', inverse: false }, { key: 'promoted', inverse: true }])
        else if (sortQuery === DELIVERY_EARLIEST)
            data = orderBy(searchData, [{ key: 'open', inverse: true }, { key: 'deliveryTimeInMinutes', inverse: false }, { key: 'promoted', inverse: true }])
        else if (sortQuery === '')
            data = searchData;

        setRestraunts(data)

    }, [sortQuery, searchQuery, cuisines])

    return (
        <RestaurantContext.Provider value={{ restaurants, setRestraunts, cuisines, toggleCuisine, sortQuery, setSortQuery, searchQuery, addToSearch, removeFromSearch }}>
            {children}
        </RestaurantContext.Provider >
    );
}
