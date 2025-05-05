import { fireEvent, render, screen } from '@testing-library/react';
import UniversityPart from '../components/UniversityPart';
import { University } from '../types/universities';

describe('University Part component', () => {
    test('Render university part', () => {
        const university: University = {
            "id": "novia",
            "name": "Novia University of Applied Sciences",
            "city": "Vaasa",
            "overview": "Novia UAS provides diverse, practice-oriented higher education, preparing students to become skilled professionals and innovators in response to real-world workforce demands. Its high-quality Bachelor's and Master's programs lay a solid foundation for students' future career paths.",
            "ranking": "NA",
            "tuition": "Tuition fee ranges from 10 000€ to 15 000€",
            "scholarship": "3000€",
            "type": "UAS",
            "website": "https://kamk.fi/en/",
            "fieldOptions": [
                "Business Administration",
                "Engineering",
                "Health Care",
                "Society",
                "Culture and Arts",
                "Maritime Management"
            ]
        }
        const mockFunction = jest.fn()
        render(<UniversityPart university={university} handleExtend={mockFunction} isOpen={false} index={0} uniIndex={0} />)
        expect(screen.getByText('Novia University of Applied Sciences')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Novia University of Applied Sciences'))
        expect(mockFunction).toHaveBeenCalledTimes(1)
        expect(screen.getByText('Location: Vaasa')).toBeInTheDocument()
        expect(screen.getByText('Type: UAS')).toBeInTheDocument()
        expect(screen.getByText('Tuition: Tuition fee ranges from 10 000€ to 15 000€')).toBeInTheDocument()
        expect(screen.getByText("Novia UAS provides diverse, practice-oriented higher education, preparing students to become skilled professionals and innovators in response to real-world workforce demands. Its high-quality Bachelor's and Master's programs lay a solid foundation for students' future career paths.")).toBeInTheDocument()
        expect(screen.getByText('University website: https://kamk.fi/en/')).toBeInTheDocument()
        expect(screen.getByText('More details')).toBeInTheDocument()
    })
})