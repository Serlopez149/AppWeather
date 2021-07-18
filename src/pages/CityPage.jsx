import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
    {hour: 18, state: "sunny", temperature: 36, weekDay:"lunes"},
    {hour: 6, state: "rain", temperature: 11, weekDay:"domingo"},
    {hour: 13, state: "fog", temperature: 17, weekDay:"lunes"},
    {hour: 24, state: "sunny", temperature: 47, weekDay:"martes"},
    {hour: 1, state: "cloud", temperature: 2, weekDay:"lunes"},
    {hour: 12, state: "sunny", temperature: 28, weekDay:"jueves"},
]

const CityPage = () => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container 
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item={12}
                    justify="center">
                    <Weather state={state} temperature={temperature}/>
                    <WeatherDetails humidity={humidity}
                        wind={wind}/>
                </Grid>
                <Grid>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid>
                    <Forecast forecastItemList={forecastItemList}/>
                </Grid>    
            </Grid>
        </AppFrame>    
            
    )
}   


export default CityPage
