import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from "react"
interface Props {
    options: Array<string>,
    handleFilter: (value: string) => void,
    kind: 'degree' | 'field' | 'uniType' | 'uniFieldType'

}

interface ButtonProps {
    setCurrentOption: Dispatch<SetStateAction<string>>
    handleFilter: (value: string) => void
}

const DeleteButton = ({ setCurrentOption, handleFilter }: ButtonProps) => {
    return (
        <button className="deleteButton" onClick={() => {
            setCurrentOption('Options')
            handleFilter('')
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 59"
                className="bin"
            >
                <path
                    fill="#B5BAC1"
                    d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
                ></path>
                <path
                    fill="#B5BAC1"
                    d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
                ></path>
                <path
                    fill="#B5BAC1"
                    d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                ></path>
                <path fill="#B5BAC1" d="M2 13H48L47.6742 21.28H2.32031L2 13Z"></path>
            </svg>

            <span className="tooltip">Delete</span>
        </button>
    )
}


const DropDownFilter = ({ options, handleFilter, kind }: Props) => {
    const searchParams = useSearchParams()
    let queryOption;

    switch (kind) {
        case 'degree':
            queryOption = searchParams.get('degree');
            if (!queryOption) {
                queryOption = 'Degree'
            }
            break;
        case 'field':
            queryOption = searchParams.get('field');
            if (!queryOption) {
                queryOption = 'Field of studies'
            }
            break;
        case 'uniFieldType':
            queryOption = searchParams.get('uniFieldType');
            if (!queryOption) {
                queryOption = 'Field of studies'
            }
            break;
        case 'uniType':
            queryOption = searchParams.get('uniType');
            if (!queryOption) {
                queryOption = 'Type of university'
            }
            break;
        default:
            if (!queryOption) {
                queryOption = 'Option'
            }
            break;
    }


    const [currentOption, setCurrentOption] = useState(queryOption)
    return (

        <>
            <Menu as="div" className="flex relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                        {currentOption}
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className={`${options.length > 6 && 'max-h-[400px] overflow-y-scroll'}  absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in`}
                >
                    <div className="py-1">
                        {options.map(d => {
                            return (
                                <MenuItem
                                    key={`degree options ${d}`}
                                >
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        onClick={() => {
                                            setCurrentOption(d)
                                            handleFilter(d)
                                        }}
                                    >
                                        {d}
                                    </a>

                                </MenuItem>
                            )
                        })}
                    </div>

                </MenuItems>

            </Menu>
            {currentOption != 'Options' && <DeleteButton handleFilter={handleFilter} setCurrentOption={setCurrentOption} />}

        </>

    )
}

export default DropDownFilter