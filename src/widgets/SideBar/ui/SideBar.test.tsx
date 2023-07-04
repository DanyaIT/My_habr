import { fireEvent, getByTestId, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { componentRender } from "shared/lib/tests/componentRender/componentRender"



describe('Sidebar', () => {
    test('Render Sidebar', () => {
           componentRender(<BrowserRouter basename = '/'><SideBar/></BrowserRouter>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    
    test('Test toggle SideBar', () => {
        componentRender(<BrowserRouter basename = '/'><SideBar/></BrowserRouter>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})

