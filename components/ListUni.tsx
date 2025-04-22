"use client";

import { useState } from "react";

import usePageService from "../services/PageService";
import UniversityPart from "./UniversityPart";
import { University } from "../types/universities";
import Paginations from "./Paginations";
import SearchingPart from "./SearchingPart";
import DropDownFilter from "./DropDownFilter";


const ListUni = ({ universities }: { universities: Array<University> }) => {
    ///This component will show all the universities
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
    const uniTypes = ['Research University', 'UAS']
    const uniField = ['Engineering', 'Ethical Technological Future', 'Business', 'Natural Sciences', 'Health and Biomedical Sciences',
        'Education', 'Hospitality Management', 'Health', 'Social', 'Society', 'Built Environment',
        'Information Technology', 'Life Sciences', 'Architecture', 'Mining', 'Human Sciences', 'Culture',
        'Arts', 'Sports Management', 'Sustainability Transformation', 'Environmental, Food and Biological Sciences', 'Forest Sciences',
        'Law', 'Laboratory Services'
    ]

    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems: paginatedUniversities,
        handleQueryChange,
        handleUniTypeChange,
        handleUniFieldType,
    } = usePageService(universities)

    const handleExtend = (i: number) => {
        /// Show more information of a university when someone click it
        /// Set the uniIndex to the clicked university's index to show only its information
        setUniIndex(i)
        setIsOpen(true)
    }


    return (
        <>
            <SearchingPart handleQueryChange={handleQueryChange} items={universities} />
            <div className="w-full max-w-4xl flex justify-center p-5 gap-5 items-center">
                <DropDownFilter options={uniField} handleFilter={handleUniFieldType} kind="Field" />
                <DropDownFilter options={uniTypes} handleFilter={handleUniTypeChange} kind="University" />
            </div>
            {paginatedUniversities?.map((university, index) => {
                return (
                    <UniversityPart
                        university={'name' in university ? university : undefined}
                        handleExtend={handleExtend}
                        isOpen={isOpen}
                        index={index}
                        uniIndex={uniIndex}
                        key={`university ${index}`}
                    />
                )
            })}
            <Paginations totalPage={totalPage} receivedPage={receivedPage} handlePageChange={handlePageChange} />
        </>
    )
}

export default ListUni