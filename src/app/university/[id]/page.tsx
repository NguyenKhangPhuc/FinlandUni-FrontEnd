

import Majors from "../../../../components/Majors"
import { getMajorsByUni, getUniversityById } from "../../../../services/UniService"

export default async function UniversityDetails({ params }: { params: { id: string } }) {
    const { id } = await params
    const university = await getUniversityById(id)
    const majors = await getMajorsByUni(id)


    return (
        <div className="w-full flex flex-col items-center">
            <div className="header p-3">{university.name} #{university.ranking}</div>
            <div className="w-full bg-gray-800 text-white p-3 opacity-70 flex justify-center gap-12 text-[12px]">
                <div>Location: {university.city}</div>
                <div>Type: {university.type}</div>
                <div>Tuition: {university.tuition}</div>
                <div>Scholarship: {university.scholarship}</div>
            </div>
            <div className="header p-5">Overview</div>
            <div className="w-1/2  text-white p-5 bg-gray-800 rounded-lg">{university.overview}</div>
            <div className="header p-5">Majors</div>
            <Majors majors={majors} id={id} fieldOptions={university.fieldOptions} />
        </div>
    )
}