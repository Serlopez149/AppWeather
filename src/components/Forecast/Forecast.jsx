import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForescastItem = forecast => {
    const {hour, weekDay, temperature, state } = forecast
    return (
        <Grid 
            data-testid="forecast-item-container" 
            item key={`${weekDay}${hour}`}>
            <ForecastItem 
                temperature={temperature}
                hour={hour}
                weekDay={weekDay}
                state={state}
            ></ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="center"
            alignItems="center">
            {
                forecastItemList.map(forecast => renderForescastItem(forecast))
            }

        </Grid>
            
        
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired, 
        state: PropTypes.oneOf([validValues]).isRequired, 
        temperature: PropTypes.number.isRequired,
    })).isRequired
}

export default Forecast
