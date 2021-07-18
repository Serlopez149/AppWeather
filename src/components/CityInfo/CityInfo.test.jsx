import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'


test("CityInfo render", async () => {
    
    const city = "Buenos Aires"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city="Buenos Aires" country="Argentina" />)

    const cityAndCountryComponents = await findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})