import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem vitae enim veritatis nihil, tempore rerum cupiditate ab similique voluptatibus libero. Dolore debitis qui, ullam expedita maxime exercitationem at recusandae.
        </AppFrame>
    </Router>    
        
) 