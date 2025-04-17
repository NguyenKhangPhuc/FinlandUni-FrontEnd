"use client";

import { useState } from "react";

import usePageService from "../services/PageService";
import UniversityPart from "./UniversityPart";
import { University } from "../types/universities";
import Paginations from "./Paginations";
import SearchingPart from "./SearchingPart";
import DropDownFilter from "./DropDownFilter";


const ListUni = ({ universities }: { universities: Array<University> }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
    const uniTypes = ['Research University', 'UAS']
    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems: paginatedUniversities,
        handleQueryChange,
        handleUniTypeChange,
    } = usePageService(universities)

    const handleExtend = (i: number) => {
        setUniIndex(i)
        setIsOpen(true)
    }


    return (
        <>
            <SearchingPart handleQueryChange={handleQueryChange} items={universities} />
            <div className="w-full max-w-4xl flex justify-center p-5 gap-5 items-center">
                <DropDownFilter options={uniTypes} handleFilter={handleUniTypeChange} kind="degree" />
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