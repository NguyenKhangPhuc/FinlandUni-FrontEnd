import { fireEvent, render, screen } from '@testing-library/react';
import Paginations from '../components/Paginations';

describe('Pagination component', () => {
    test('Render drop down filter', () => {
        const mockFunction = jest.fn()
        render(<Paginations totalPage={3} receivedPage={1} handlePageChange={mockFunction} />)
        const page_1 = screen.getByText('1')
        const page_2 = screen.getByText('2')
        const page_3 = screen.getByText('3')
        expect(page_1).toBeInTheDocument()
        expect(page_2).toBeInTheDocument()
        expect(page_3).toBeInTheDocument()
        fireEvent.click(page_1)
        expect(mockFunction).toHaveBeenCalledWith(1)
        fireEvent.click(page_2)
        expect(mockFunction).toHaveBeenCalledWith(2)
        fireEvent.click(page_3)
        expect(mockFunction).toHaveBeenCalledWith(3)
    })
})