import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogota", country:"Colombia"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Santiago", country:"Chile"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("click")} />