import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';


describe('Header component', () => {
    test('Renders header text', async () => {
        render(<Header />)
        const hamburger = screen.getByRole('checkbox')
        expect(hamburger).toBeInTheDocument()
        fireEvent.click(hamburger)
        expect(screen.getByText('Overview')).toBeInTheDocument();
        expect(screen.getByText('Living cost and external fees')).toBeInTheDocument();
        expect(screen.getByText('Accomodation')).toBeInTheDocument();
        expect(screen.getByText('About Degrees')).toBeInTheDocument();
        expect(screen.getByText('Universities List')).toBeInTheDocument();
        expect(screen.getByText('Disclaimer and Privacy Policy')).toBeInTheDocument();
        expect(screen.getByText('Term of Services')).toBeInTheDocument();
    })
})