import './App.css'
import Continents from "./components/Continents";
import CountriesBox from "./components/CountriesBox";
import {
    BrowserRouter
} from 'react-router-dom'
import 'leaflet/dist/leaflet.css'


import {useState} from "react"
function App():JSX.Element {

    const [url, setUrl] = useState('')

  return (
      <BrowserRouter>
      <div className='flex flex-col items-center tracking-widest p-6 bg-slate-300'>
          <h1 className='sm:text-4xl text-xl font-semibold uppercase mb-4'>Countries by Continent</h1>
          <Continents setUrl={setUrl}></Continents>
             <div className='mb-6 flex justify-between'>
                  <CountriesBox url={url} ></CountriesBox>
            </div>
          <hr className='mb-4'></hr>
      </div>
      </BrowserRouter>
  )
}

export default App
