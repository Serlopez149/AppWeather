import { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units' 
import { validValues } from '../components/IconState'
import { getCityCode } from './../utils/utils'

const useCityList = (cities)  => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) =>{
            const appid = "f8a82498006e77abc7b5fc2b93ed7e34"
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`; 
            
            try {
                const response = await axios.get(url)
            
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const stateFromServer = data.weather[0].main.toLowerCase()
                
                const state = validValues.includes(stateFromServer) ? stateFromServer : null

                const propName = getCityCode(city, countryCode)
                const propValue = {temperature, state}
                
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
                
            } catch (error) {
                if (error.response){
                    setError("ha ocurrido un error en el servidor del clima")
                } else if(error.request) {
                    setError("Verifique la conexion a internet")
                } else {
                    setError("Error al cargar los datos")
                }
                
            }
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])

    return {allWeather, error, setError}
}

export default useCityList