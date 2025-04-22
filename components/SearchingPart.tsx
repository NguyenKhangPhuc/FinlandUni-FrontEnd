import React from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Major, University } from "../types/universities";

interface Props {
    handleQueryChange: (value: string) => void
    items: Array<Major> | Array<University>
}

const SearchingPart = ({ handleQueryChange, items }: Props) => {

    ///This component will catch the value of the input
    ///Show the recommendattion based on the items passed
    ///This component will be reused for both universities search and majors search
    ///When a recommendation is clicked, it will set the 'query' params on the url
    ///Then show only that recommendation details

    const [searchValue, setSearchValue] = useState('')
    const [searchRecommendations, setSearchRecommendation] = useState<Array<University | Major>>([])


    const handleShowRecommendation = useDebouncedCallback((value: string) => {
        ///Catch the value of the input
        ///Filter the items base on the value of input, and base on type of items.
        ///UseDebouncedCallback to only call the function after the input value stopped for 3 seconds.
        if (value == '') {
            setSearchRecommendation([])
        } else {
            const filteredUniversities = items.filter((item) => {
                if ('name' in item) {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                } else if ('major' in item) {
                    return item.major.toLowerCase().includes(value.toLowerCase())
                }
            })
            console.log(filteredUniversities)
            setSearchRecommendation(filteredUniversities)
        }
    }, 250)

    const handleChooseRecommendation = (value: string) => {
        ///Set the 'query' params on the url to the clicked recommmendation value
        ///Close the recommendation part.
        handleQueryChange(value)
        setSearchRecommendation([])
    }

    const handleDeleteSearchField = () => {
        ///
        setSearchRecommendation([])
        setSearchValue('')
        handleQueryChange('')
    }
    return (
        <form className="sm:w-2/3 flex flex-col gap-5 w-5/6  justify-center items-center" onSubmit={(e) => {
            e.preventDefault()
            setSearchRecommendation([])
            handleQueryChange(searchValue)
        }}
            id="universities"
        >
            <div className="lg:w-2/3 w-full flex justify-center">
                <input
                    placeholder="Searching for universities..."
                    className="input-pop-up input w-full h-[2rem] sm:placeholder:text-lg placeholder:text-[11px]"
                    name="university_search"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        handleShowRecommendation(e.target.value)
                    }}
                />
                <button aria-label="Delete item" type="button" className="delete-button absolute right-8" onClick={() => handleDeleteSearchField()}>
                    <svg
                        className="trash-svg"
                        viewBox="0 -10 64 74"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="trash-can">
                            <rect
                                x="16"
                                y="24"
                                width="32"
                                height="30"
                                rx="3"
                                ry="3"
                                fill="#e74c3c"
                            ></rect>

                            <g transform="12 18" id="lid-group">
                                <rect
                                    x="12"
                                    y="12"
                                    width="40"
                                    height="6"
                                    rx="2"
                                    ry="2"
                                    fill="#c0392b"
                                ></rect>
                                <rect
                                    x="26"
                                    y="8"
                                    width="12"
                                    height="4"
                                    rx="2"
                                    ry="2"
                                    fill="#c0392b"
                                ></rect>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            {
                searchRecommendations.length != 0 &&
                <div className={`w-2/3 flex flex-col items-center p-3 ${searchRecommendations.length >= 4 && 'overflow-y-scroll'} max-h-[200px]`}>
                    {searchRecommendations.map(recommendation => {
                        if ('name' in recommendation) {
                            return (
                                <div key={`Universities recommendations ${recommendation.name}`}
                                    className="recommendation w-full "
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
        </form>
    )
}

export default SearchingPart
