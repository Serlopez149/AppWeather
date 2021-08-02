import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {hour: 18, state: "clear", temperature: 36, weekDay:"lunes"},
    {hour: 6, state: "rain", temperature: 11, weekDay:"domingo"},
    {hour: 13, state: "drizzle", temperature: 17, weekDay:"lunes"},
    {hour: 24, state: "clear", temperature: 47, weekDay:"martes"},
    {hour: 1, state: "snow", temperature: 2, weekDay:"lunes"},
    {hour: 12, state: "clear", temperature: 28, weekDay:"jueves"},
]


test('Forecast render', async () => {
    // findAllByTestId nos va a permitir encontrar cada item con esa marca
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)
    
    const forecastItems = await findAllByTestId("forecast-item-container")
    
    expect(forecastItems).toHaveLength(6)
})
