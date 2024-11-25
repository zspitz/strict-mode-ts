import { useEffect, useState } from 'react'
import { citiesApi, countriesApi } from './geoService'

const GeoData = () => {
    const [api, setApi] = useState('cities')
    const [items, setItems] = useState<string[]>([])

    useEffect(() => {
        let throwAway = false

        const fetchItems = async () => {
            const fetchedItems =
                api === 'cities' ? await citiesApi() :
                    api === 'countries' ? await countriesApi() :
                        []

            if (throwAway) { return }
            setItems(fetchedItems)
        }

        fetchItems()

        return () => {
            throwAway = true
        }
    }, [api])

    return (
        <>
            <select value={api} onChange={e => setApi(e.target.value)}>
                <option value='cities'>ערים (API איטי)</option>
                <option value='countries'>ארצות (API מהיר)</option>
            </select>
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default GeoData
