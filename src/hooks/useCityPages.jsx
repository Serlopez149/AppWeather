import { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units' 
import moment from 'moment'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'

const useCityPage = () => {
    const [chartData, setChartData ] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    const {city, countryCode } = useParams()
    
    
    useEffect(() => {
        const getForecast = async () => {
            const appid = "f8a82498006e77abc7b5fc2b93ed7e34"
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
            
            try {
                const { data } = await axios.get(url)
                const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))
                console.log("chartData", chartData)
                
                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
                const dataAux = days.map(day => {
                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    const temps = tempObjArray.map(item => item.main.temp)

                    return ({
                        dayHour: day.format('ddd'),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps)),
                        hasTemps: (temps.length > 0 ? true : false)
                    })
                }).filter(item => item.hasTemps)
                setChartData(dataAux)
                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemListAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return({
                            hour: moment.unix(item.dt).hour(),
                            weekDay: moment.unix(item.dt).format('dddd'),
                            state: item.weather[0].main.toLowerCase(),
                            temperature: toCelsius(item.main.temp)
                        })
                    })
                setForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }
            
        }
        getForecast()
    }, [city, countryCode])
    return { city, chartData, forecastItemList }
}

export default useCityPage