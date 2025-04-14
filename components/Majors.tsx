"use client"
import usePageService from "../services/PageService"
import { Major } from "../types/universities"
import Paginations from "./Paginations"

const Majors = ({ majors }: { majors: Array<Major> }) => {
    const { totalPage, receivedPage, handlePageChange, paginatedItems, handleQueryChange } = usePageService(majors)

    console.log(paginatedItems)
    return (
        <div className="w-full h-auto flex flex-col text-white items-center">
            {paginatedItems?.map((major) => {
                if ('major' in major) {
                    return (
                        <div key={`${major.major} of ${major.uni_id}`}
                            className="w-full max-w-4xl flex flex-col items-center bg-gray-800 p-2 rounded-lg shadow-lg mx-auto my-4"
                        >
                            <div className="text-1xl font-bold p-5">{major.major}</div>

                            <div className="w-full flex">
                                <div className="header_cell ">Degree</div>
                                <div className="header_cell">Duration</div>
                                <div className="header_cell">Application period</div>
                                <div className="header_cell">Language</div>
                            </div>
                            <div className="w-full flex">
                                <div className="cell">{major.degree}</div>
                                <div className="cell">{major.duration}</div>
                                <div className="cell">{major.applicationPeriod}</div>
                                <div className="cell">{major.language}</div>
                            </div>

                            <div className="w-full flex">
                                <div className="header_cell">Field</div>
                                <div className="header_cell">Credits</div>
                                <div className="header_cell">Tuition fee</div>
                                <div className="header_cell">Website</div>
                            </div>


                            <div className="w-full flex">
                                <div className="cell">{major.studyField}</div>
                                <div className="cell">{major.credits}</div>
                                <div className="cell">{major.tuition}</div>
                                <div className="cell"><a href={`${major.website}`} className="underline text-blue-400">Visit website</a></div>
                            </div>

                            <div className="font-bold text-lg">Description</div>
                            <div className="w-2/3 text-[14px] text-center opacity-90">{major.description}</div>

                        </div>

                    )
                }
            })}
            <Paginations totalPage={totalPage} receivedPage={receivedPage} handlePageChange={handlePageChange} />
        </div >
    )
}

export default Majors