import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame/AppFrame'
import CityList from './../components/CityList/CityList'


const cities = [
    {city:"Buenos Aires", country:"Argentina", countryCode: "AR"},
    {city:"Bogota", country:"Colombia", countryCode:"CO"},
    {city:"Caracas", country:"Venezuela", countryCode:"VE"},
    {city:"Santiago", country:"Chile", countryCode:"CL"},
]

const MainPage = () => {
    const history = useHistory()
    
    const onClickHandler = (countryCode, city) => {
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    cities={cities} 
                    onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}


export default MainPage
