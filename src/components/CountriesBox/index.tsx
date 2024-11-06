import Country from "../Country";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

interface CountriesBoxProps {
    url: string;
}

const CountriesBox = ({url}: CountriesBoxProps) => {

    const [countries, setCountries] = useState([])
    const getCountries = async () => {
        const response = await fetch(url)
        const countriesArray = await response.json()
        setCountries(countriesArray)
    }

    useEffect(() => {
        getCountries()
    }, [url])

    return (
        <>
            <div >
                <Routes>
                    <Route path={'/countriesByContinent'} element={<h2 className='text-2xl mt-10 text-blue-600'>Select a continent</h2>}></Route>
                    <Route path={'/africa'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/antarctica'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/asia'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/northAmerica'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/oceania'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/southAmerica'} element={<Country continent={countries}/>}></Route>
                    <Route path={'/europe'} element={<Country continent={countries}/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default CountriesBox