"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import DetailButton from "./DetailButton";
import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "../services/UniService";
import usePageService from "../services/PageService";


const ListUni = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
    const [searchValue, setSearchValue] = useState('')
    const { data: universities } = useQuery({
        queryKey: ['universities'],
        queryFn: getUniversities
    })

    const {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedUniversities,
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
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, delay: (index) * 0.1 }}
                        key={`university ${index}`}
                        className="w-1/2 p-6 border-b border-white hover:text-indigo-200 duration-300 cursor-pointer hover:border-indigo-500 "
                        onClick={() => handleExtend(index)}
                    >
                        <div className="text-1xl font-bold">{university.name} #{university.ranking}</div>
                        <div className="flex justify-between opacity-70 text-[13px] font-bold">
                            <div>Location: {university.city}</div>
                            <div>Type: {university.type}</div>
                        </div>
                        <div className="opacity-70 text-[11px]">Tuition: {university.tuition}</div>
                        <div className="opacity-70 text-[11px]">Scholarship: {university.scholarship}</div>
                        <motion.div
                            initial={{ opacity: 0, y: -50, x: -50 }}
                            animate={{ opacity: isOpen && uniIndex == index ? 1 : 0, y: isOpen && uniIndex == index ? 0 : -50, x: isOpen && uniIndex == index ? 0 : -50 }}
                            transition={{ duration: 0.5 }}
                            className={isOpen && uniIndex == index ? 'block pt-3 pb-3' : 'hidden'}
                        >
                            {university.overview}
                        </motion.div>
                        <a className="website_link opacity-70 text-[13px] underline" href={`${university.website}`}>University website: {university.website}</a>
                        <DetailButton isOpen={isOpen} uniIndex={uniIndex} index={index} />

                    </motion.div>
                )
            })}
            <div className="flex p-8 gap-2">
                {Array.from({ length: totalPage ? totalPage : 0 }, (_, i) => i + 1).map(page => {
                    return (
                        <button
                            key={`page ${page}`}
                            onClick={() => handlePageChange(page)}
                            className={`pagination ${page === receivedPage ? 'bg-gray-300 text-black' : 'bg-indigo-800'}`}
                        >
                            {page}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default ListUni