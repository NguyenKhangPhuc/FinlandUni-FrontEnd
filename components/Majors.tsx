"use client"
import usePageService from "../services/PageService"
import { Major } from "../types/universities"
import Paginations from "./Paginations"
import SearchingPart from "./SearchingPart"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface Props {
    options: Array<string>,
    handleFilter: (value: string) => void
}

const DropDownFilter = ({ options, handleFilter }: Props) => {
    return (

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    Options
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    {options.map(d => {
                        return (
                            <MenuItem
                                key={`degree options ${d}`}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    onClick={() => handleFilter(d)}
                                >
                                    {d}
                                </a>
                            </MenuItem>
                        )
                    })}

                </div>
            </MenuItems>
        </Menu>

    )
}


const Majors = ({ majors }: { majors: Array<Major> }) => {
    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems,
        handleQueryChange,
        handleDegreeChange,
        handleFieldchange,
    } = usePageService(majors)
    const degreeOptions = ['Bachelor studies', 'Master studies', 'Doctoral studies']
    const fieldOptions = ['Art and design', 'Technology and Engineering', 'Business and Economics']
    return (
        <div className="w-full h-auto flex flex-col text-white items-center" >

            <SearchingPart handleQueryChange={handleQueryChange} items={majors} />
            <div className=" w-full max-w-4xl flex justify-center p-5 gap-5">
                <DropDownFilter options={degreeOptions} handleFilter={handleDegreeChange} />
                <DropDownFilter options={fieldOptions} handleFilter={handleFieldchange} />
            </div>
            {paginatedItems?.map((major) => {
                if ('major' in major) {
                    return (
                        <div key={`${major.major} of ${major.uni_id}`}
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