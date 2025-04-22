import { motion } from "framer-motion";
import Link from "next/link";
const DetailButton = ({ isOpen, uniIndex, index, uniID }: { isOpen: boolean, uniIndex: number | undefined, index: number, uniID: string }) => {
    ///Show the button when a specific university is clicked
    ///Navigate to the university details (/university/aalto for example)
    ///If the button is clicked

    return (
        <Link href={`/university/${uniID}`}>
            <div className={`relative group ${isOpen && uniIndex == index ? 'block' : 'hidden'}`}>
                <motion.button
                    className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: isOpen && uniIndex == index ? 1 : 0, x: isOpen && uniIndex == index ? 0 : -100 }}
                    transition={{ duration: 0.2 }}
                >
                    <span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>

                    <span className="relative z-10 block px-4 py-1 rounded-xl bg-gray-950">
                        <div className="relative z-10 flex items-center space-x-2">
                            <span className="transition-all duration-500 group-hover:translate-x-1 text-xs"
                            >More details</span>
                            <svg
                                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                data-slot="icon"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </span>
                </motion.button>
            </div>
        </Link>
    )
}

export default DetailButton