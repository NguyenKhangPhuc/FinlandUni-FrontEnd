import { render, screen } from '@testing-library/react';
import DetailButton from '../components/DetailButton';


describe('DetailButton component', () => {
    test('Render details button', () => {
        render(<DetailButton isOpen={true} uniIndex={0} index={0} uniID='aalto' />)
        const button = screen.getByText('More details')
        expect(button).toBeInTheDocument()
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/university/aalto')

    })
})