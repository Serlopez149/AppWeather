import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {hour: 18, state: "sunny", temperature: 36, weekDay:"lunes"},
    {hour: 6, state: "rain", temperature: 11, weekDay:"domingo"},
    {hour: 13, state: "fog", temperature: 17, weekDay:"lunes"},
    {hour: 24, state: "sunny", temperature: 47, weekDay:"martes"},
    {hour: 1, state: "cloud", temperature: 2, weekDay:"lunes"},
    {hour: 12, state: "sunny", temperature: 28, weekDay:"jueves"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)