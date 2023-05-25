import { fireEvent, getByTestId, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"
import { debug } from "console"



describe('Sidebar', () => {
    test('Render Sidebar', () => {
        renderWithTranslation(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    
    test('Test toggle SideBar', () => {
        renderWithTranslation(<SideBar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})