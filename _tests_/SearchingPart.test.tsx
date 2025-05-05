import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchingPart from '../components/SearchingPart';
import { Major } from '../types/universities';

describe('Searching component', () => {
    test('Render searching component', async () => {
        const mockFunction = jest.fn()
        const items: Array<Major> = [{
            "uni_id": "kamk",
            "major": "Bachelor’s Degree in Business Information Technology, Game Development, full-time",
            "degree": "Bachelor studies",
            "duration": "3,5 years",
            "credits": "210 credits",
            "applicationPeriod": "1.-8.4.2025",
            "language": "English",
            "studyField": "Engineering",
            "tuition": "8000€",
            "description": "The Bachelor’s Degree in Business Information Technology at Kajaani University of Applied Sciences offers you an extensive education in the field of game development. During the studies, you can choose to specialize in game programming, game art/graphics or producing games.",
            "website": "https://kamk.fi/en/koulutukset/bachelors-degree-in-business-information-technology-game-development/"
        }]
        render(<SearchingPart handleQueryChange={mockFunction} items={items} />)
        const input = screen.getByPlaceholderText('Searching for universities...')
        expect(input).toBeInTheDocument()
        fireEvent.change(input, { target: { value: 'Business' } })
        jest.advanceTimersByTime(250)
        await waitFor(() => {
            expect(screen.getByText('Bachelor’s Degree in Business Information Technology, Game Development, full-time')).toBeInTheDocument()
        })

    })
})