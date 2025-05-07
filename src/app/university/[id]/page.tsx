

import Loader from "../../../../components/Loader"
import Majors from "../../../../components/Majors"
import { getMajorsByUni, getUniversityById } from "../../../../services/UniService"

export default async function UniversityDetails({ params }: { params: { id: string } }) {

    ///Getting the id from the url, use that id to fetch the specific university and its major
    ///This component contains the detail for the university and show its major by a component 'Majors'
    const { id } = await params
    const university = await getUniversityById(id)
    const majors = await getMajorsByUni(id)
    if (!majors || !university) {
        return (
            <div className="w-full flex flex-col items-center justify-center mt-20">
                <Loader />
                <div className="text-white">Loading content...</div>
            </div>
        )
    }
    return (
        <div className="w-full flex flex-col items-center">
            <div className="header p-3 text-indigo-500">{university?.name}</div>
            <div className="xl:text-[15px] w-full bg-gray-800 text-white p-3 opacity-70 flex justify-around text-[10px] gap-3">
                <div className="text-center">Location: {university?.city}</div>
                <div className="text-center">Type: {university?.type}</div>
                <div className="text-center">Tuition: {university?.tuition}</div>
                <div className="text-center">Scholarship: {university?.scholarship}</div>
            </div>
            <div className="header p-5 text-white">Overview</div>
            <div className="lg:w-1/2 w-full  text-white p-5 bg-gray-800 rounded-lg">{university?.overview}</div>
            <div className="header p-5 text-white">Majors</div>
            <Majors majors={majors} id={id} fieldOptions={university?.fieldOptions} />
        </div>
    )
}