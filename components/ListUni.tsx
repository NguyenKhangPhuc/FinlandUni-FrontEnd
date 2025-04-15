"use client";

import { ChangeEvent, useState } from "react";

import usePageService from "../services/PageService";
import UniversityPart from "./UniversityPart";
import { Major, University } from "../types/universities";
import Paginations from "./Paginations";
import { useDebouncedCallback } from "use-debounce";
interface Props {
    handleQueryChange: (value: string) => void
    items: Array<Major> | Array<University>
}

const SearchingPart = ({ handleQueryChange, items }: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const [searchRecommendations, setSearchRecommendation] = useState<Array<University | Major>>([])
    const handleShowRecommendation = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if (e.target.value == '') {
            setSearchRecommendation([])
        } else {
            const filteredUniversities = items.filter((item) => {
                if ('name' in item) {
                    return item.name.toLowerCase().includes(e.target.value.toLowerCase())
                } else if ('major' in item) {
                    return item.major.toLowerCase().includes(e.target.value.toLowerCase())
                }
            })
            console.log(filteredUniversities)
            setSearchRecommendation(filteredUniversities)
        }
    }, 300)

    const handleChooseRecommendation = (value: string) => {
        handleQueryChange(value)
        setSearchRecommendation([])
    }
    return (
        <form className="flex gap-5 w-2/3  justify-center" onSubmit={(e) => {
            e.preventDefault()
            setSearchRecommendation([])
            handleQueryChange(searchValue)
        }}
            id="universities"
        >
            <div className="w-1/2 flex flex-col justify-center">
                <input
                    placeholder="Tìm kiếm các trường đại học..."
                    className="input-pop-up input w-full h-[2rem]"
                    name="university_search"
                    onChange={(e) => handleShowRecommendation(e)}
                />
                {searchRecommendations.length != 0 &&
                    <div className={`w-full flex flex-col items-center p-3 ${searchRecommendations.length >= 4 && 'overflow-y-scroll'} max-h-[200px]`}>
                        {searchRecommendations.map(recommendation => {
                            if ('name' in recommendation) {
                                return (
                                    <div key={`Universities recommendations ${recommendation.name}`}
                                        className="recommendation w-full"
                                        onClick={() => handleChooseRecommendation(recommendation.name)}
                                    >
                                        {recommendation.name}
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={`Universities recommendations ${recommendation.major}`}
                                        className="recommendation w-full"
                                        onClick={() => handleChooseRecommendation(recommendation.major)}
                                    >
                                        {recommendation.major}
                                    </div>
                                )
                            }
                        })}
                    </div>
                }
            </div>

            <div className="buttons">
                <button className="btn">
                    <span></span>
                    <p data-start="good luck!" data-text="now!" data-title={searchValue == '' ? 'reset' : 'search'}>
                    </p>
                </button>
            </div>
        </form>
    )
}


const ListUni = ({ universities }: { universities: Array<University> }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
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
            <SearchingPart handleQueryChange={handleQueryChange} items={universities} />
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