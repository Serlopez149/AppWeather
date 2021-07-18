import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogota", country:"Colombia"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Santiago", country:"Chile"},
]
test("CityList renders", async () =>{
    ///AAA
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    // Debemos simular una accion del usuario: click sobre un item
    // Para eso vamos a utilizar una funcion "mock"
    const fnClickOnItem =jest.fn()

    const {findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items =await findAllByRole("listitem")

    //Ahora, para simular la accion, Vamos a utilizar fireEvent
    // fireEvent es parte de la libreria testing-library

    fireEvent.click(items[0])
    //¿ahora que tuvo que suceder?
    //se debio llamar a la funcion fnClickOnItem UNA unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})