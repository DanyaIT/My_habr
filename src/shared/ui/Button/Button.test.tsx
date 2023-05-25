
import { Button, ThemeButton } from "./Button"
import {render, screen} from '@testing-library/react'

describe("Test Button", ()=> {
    test('Render button', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Button with class', ()=> {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })

})