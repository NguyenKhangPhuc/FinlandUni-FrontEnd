"use client"
import usePageService from "../services/PageService"
import { Major } from "../types/universities"
import Paginations from "./Paginations"
import SearchingPart from "./SearchingPart"
import DropDownFilter from "./DropDownFilter"


const Majors = ({ majors }: { majors: Array<Major> }) => {
    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems,
        handleQueryChange,
        handleDegreeChange,
        handleFieldChange,
    } = usePageService(majors)
    const degreeOptions = ['Bachelor studies', 'Master studies', 'Doctoral studies']
    const fieldOptions = ['Art and design', 'Technology and Engineering', 'Business and Economics']
    return (
        <div className="w-full h-auto flex flex-col text-white items-center" >

            <SearchingPart handleQueryChange={handleQueryChange} items={majors} />
            <div className=" w-full max-w-4xl flex justify-center p-5 gap-5 items-center">
                <DropDownFilter options={degreeOptions} handleFilter={handleDegreeChange} kind='degree' />
                <DropDownFilter options={fieldOptions} handleFilter={handleFieldChange} kind='field' />
            </div>
            {paginatedItems?.map((major) => {
                if ('major' in major) {
                    return (
                        <div key={`${major.major} of ${major.uni_id}`}
                            id="major"
                            className="major_box "
                            onClick={() => window.location.href = `${major.website}`}
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