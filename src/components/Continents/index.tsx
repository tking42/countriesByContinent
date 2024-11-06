import {Link} from "react-router-dom";
import {useState} from "react";

const Continents = ({setUrl}: { setUrl: (url: string)=> void}) => {

    const [selected, setSelected] = useState<string>('');

    const getActiveLink = (continent: string): string => {
        return selected === continent ?'text-blue-600 font-bold' : 'text-black'
    }

    return (
        <div className='sm:flex sm:flex-row sm:gap-10 grid grid-cols-2 '>
            <Link className={'text-xl ' + getActiveLink('africa')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/africa?fields=name,currencies,languages,capital')
                      setSelected('africa')
                  }}
                  to='/africa'>Africa</Link>

            <Link className={'text-xl ' + getActiveLink('asia')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/asia?fields=name,currencies,languages,capital')
                      setSelected('asia')
                  }}
                  to='/asia'>Asia</Link>

            <Link className={'text-xl ' + getActiveLink('europe')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/europe?fields=name,currencies,languages,capital')
                      setSelected('europe')
                  }}
                  to='/europe'>Europe</Link>

            <Link className={'text-xl ' + getActiveLink('northAmerica')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/north%20america?fields=name,currencies,languages,capital')
                      setSelected('northAmerica')
                  }}
                  to='/northAmerica'>North America</Link>

            <Link className={'text-xl ' + getActiveLink('oceania')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/oceania?fields=name,currencies,languages,capital')
                      setSelected('oceania')
                  }}
                  to='/oceania'>Oceania</Link>

            <Link className={'text-xl ' + getActiveLink('southAmerica')}
                  onClick={() => {
                      setUrl('https://restcountries.com/v3.1/region/south%20america?fields=name,currencies,languages,capital')
                      setSelected('southAmerica')
                  }}
                  to='/southAmerica'>South America</Link>
        </div>
    )
}

export default Continents