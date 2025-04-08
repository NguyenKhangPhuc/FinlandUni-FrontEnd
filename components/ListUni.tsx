"use client";

import { motion } from "framer-motion";
import universities from "../data/UniData";
import { useState } from "react";
import DetailButton from "./DetailButton";
const ListUni = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [uniIndex, setUniIndex] = useState<number | undefined>(undefined)
    const handleExtend = (i: number) => {
        setUniIndex(i)
        setIsOpen(true)
    }
    return (
        <>
            {universities.map((university, index) => {
                return (
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, delay: (index) * 0.1 }}
                        key={`university ${index}`}
                        className="w-1/2 p-6 border-b border-white hover:text-indigo-200 duration-300 cursor-pointer hover:border-indigo-500 "
                        onClick={() => handleExtend(index)}
                    >
                        <div className="text-1xl font-bold">{university.name} #{university.ranking}</div>
                        <div className="flex justify-between text-sm opacity-70">
                            <div>thành phố: {university.city}</div>
                            <div>loại: {university.type}</div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: -50, x: -50 }}
                            animate={{ opacity: isOpen && uniIndex == index ? 1 : 0, y: isOpen && uniIndex == index ? 0 : -50, x: isOpen && uniIndex == index ? 0 : -50 }}
                            transition={{ duration: 0.5 }}
                            className={isOpen && uniIndex == index ? 'block pt-3 pb-3' : 'hidden'}
                        >
                            {university.overview}
                        </motion.div>
                        <DetailButton isOpen={isOpen} uniIndex={uniIndex} index={index} />

                    </motion.div>
                )
            })}
        </>
    )
}

export default ListUni