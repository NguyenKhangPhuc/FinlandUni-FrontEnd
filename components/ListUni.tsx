"use client";

import { useState } from "react";

import usePageService from "../services/PageService";
import UniversityPart from "./UniversityPart";
import { University } from "../types/universities";


const ListUni = ({ universities }: { universities: Array<University> }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
    const [searchValue, setSearchValue] = useState('')

    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems: paginatedUniversities,
        handleQueryChange,
    } = usePageService(universities)

    const handleExtend = (i: number) => {
        setUniIndex(i)
        setIsOpen(true)
    }



    return (
        <>
            <form className="flex gap-5 w-2/3  justify-center" onSubmit={(e) => {
                e.preventDefault()
                handleQueryChange(searchValue)
            }}
                id="universities"
            >
                <input
                    placeholder="Tìm kiếm các trường đại học..."
                    className="input-pop-up input w-2/3 h-[2rem]"
                    name="university_search"
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                <div className="buttons">
                    <button className="btn"><span></span><p data-start="good luck!" data-text="now!" data-title={searchValue == '' ? 'reset' : 'search'}></p></button>
                </div>
            </form>
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
            <div className="flex p-8 gap-2">
                {totalPage && Array.from({ length: totalPage }, (_, i) => i + 1).map(page => {
                    const isFirst = page == 1
                    const isCurrent = page == receivedPage
                    const isNearCurrent = Math.abs(page - receivedPage) == 1;
                    const isLast = page == totalPage
                    const isDot = page == receivedPage + 2 || page == receivedPage - 2
                    console.log()
                    if (isCurrent || isFirst || isNearCurrent || isLast && page > 0 && page <= totalPage) {
                        return (
                            <button
                                key={`page ${page}`}
                                onClick={() => handlePageChange(page)}
                                className={`pagination ${page === receivedPage ? 'bg-gray-300 text-black' : 'bg-indigo-800'}`}
                            >
                                {page}
                            </button>
                        )
                    } else if (isDot) {
                        return (
                            <div key={`dot ${page}`}>...</div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default ListUni