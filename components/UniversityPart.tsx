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

}

const UniversityPart = ({ university, handleExtend, isOpen, index, uniIndex }: Props) => {
    if (university) {
        return (
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: (index) * 0.1 }}
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
                <DetailButton isOpen={isOpen} uniIndex={uniIndex} index={index} uniID={university.id} />
            </motion.div>
        )
    }
}

export default UniversityPart