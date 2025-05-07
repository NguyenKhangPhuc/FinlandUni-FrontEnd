"use client";
import { motion } from "framer-motion";
import DetailButton from "./DetailButton";
import { University } from "../types/universities";
interface Props {
    university: University | undefined,
    handleExtend: (i: number) => void,
    isOpen: boolean,
    index: number
    uniIndex: number | undefined,
    testid: string | undefined
}

const UniversityPart = ({ university, handleExtend, isOpen, index, uniIndex, testid }: Props) => {
    ///This function contain the details of each university
    ///For example: name, tuition fee, location, overview,....

    if (university) {
        return (
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: (index) * 0.1 }}
                className="lg:w-2/3 w-full p-6 border-b border-white hover:text-indigo-200 duration-300 cursor-pointer hover:border-indigo-500 "
                onClick={() => handleExtend(index)}
                data-testid={testid}
            >
                <div className="2xl:text-2xl text-1xl font-bold">{university.name} </div>
                <div className="2xl:text-[20px] lg:text-[17px] flex justify-between opacity-70 text-[13px] font-bold">
                    <div>Location: {university.city}</div>
                    <div>Type: {university.type}</div>
                </div>
                <div className="2xl:text-[18px] lg:text-[15px] opacity-70 text-[11px]">Tuition: {university.tuition}</div>
                <div className="2xl:text-[18px] lg:text-[15px] opacity-70 text-[11px]">Scholarship: {university.scholarship}</div>
                <motion.div
                    initial={{ opacity: 0, y: -50, x: -50 }}
                    animate={{ opacity: isOpen && uniIndex == index ? 1 : 0, y: isOpen && uniIndex == index ? 0 : -50, x: isOpen && uniIndex == index ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    className={isOpen && uniIndex == index ? '2xl:text-[18px] lg:text-[15px] block pt-3 pb-3' : '2xl:text-[18px] lg:text-[15px] hidden'}
                >
                    {university.overview}
                </motion.div>
                <a className="2xl:text-[18px] lg:text-[15px] website_link opacity-70 text-[13px] underline" href={`${university.website}`}>University website: {university.website}</a>
                <DetailButton isOpen={isOpen} uniIndex={uniIndex} index={index} uniID={university.id} />
            </motion.div>
        )
    }
}

export default UniversityPart