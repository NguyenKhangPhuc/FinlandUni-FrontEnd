'use client'
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
const HamburgetIcon = ({ setHamburgerValue, hamburgerValue }: { setHamburgerValue: Dispatch<SetStateAction<boolean>>, hamburgerValue: boolean }) => {
    return (
        <label className="hamburger absolute left-5">
            <input type="checkbox" checked={hamburgerValue} onChange={() => setHamburgerValue(!hamburgerValue)} />
            <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
            </svg>
        </label>
    )
}

const Header = () => {

    const nav_links = [
        {
            title: 'About Finland',
            links: [
                {
                    link_title: 'Overview',
                    link: '/finland-overview'
                },
                {
                    link_title: 'Living cost and external fees',
                    link: '/living-cost-and-external-fees'
                },
                {
                    link_title: 'Accomodation',
                    link: '/accomodation'
                }
            ]
        },
        {
            title: 'Admission',
            links: [
                {
                    link_title: 'About Degrees',
                    link: '/degree'
                },
                {
                    link_title: 'Universities List',
                    link: '/'
                }
            ]
        },
        {
            title: 'About FinlandUni',
            links: [
                {
                    link_title: 'Disclaimer and Privacy Policy',
                    link: '/disclaimer-and-privacy-policy'
                },
                {
                    link_title: 'Term of Services',
                    link: '/finland-overview'
                },
                {
                    link_title: 'Cookies settings',
                    link: '/finland-overview'
                }
            ]
        }
    ]


    const [hamburgerValue, setHamburgerValue] = useState(false);
    return (
        <div className="w-full flex flex-col items-center bg-black text-white">
            <div className="w-full bg-gray-900 flex relative items-center justify-center p-5 ">
                <HamburgetIcon setHamburgerValue={setHamburgerValue} hamburgerValue={hamburgerValue} />
                <Link href={'/'} onClick={() => setHamburgerValue(false)}><div className="font-bold text-4xl text-indigo-500">FinlandUni</div> </Link>
            </div>
            {hamburgerValue &&
                <div className="w-full bg-gray-900 flex border-t border-gray-800 p-5">
                    {/* <div className="div_link border-r border-gray-800">
                        <div className="font-medium text-xl text-indigo-300 pb-3">About Finland</div>
                        <Link href={`/finland-overview`} className="link">Overview</Link>
                        <Link href={`/finland-overview`} className="link">Living cost and external fees</Link>
                        <Link href={`/finland-overview`} className="link">Accomodation</Link>
                    </div>
                    <div className="div_link border-r border-gray-800">
                        <div className="font-medium text-xl text-indigo-300 pb-3">Admission</div>
                        <Link href={`/finland-overview`} className="link">About degrees</Link>
                        <Link href={`/finland-overview`} className="link">About universities</Link>
                        <Link href={`/finland-overview`} className="link">Universities List</Link>
                    </div>
                    <div className="div_link">
                        <div className="font-medium text-xl text-indigo-300 pb-3" >About FinlandUni</div>
                        <Link href={`/finland-overview`} className="link">Disclaimer and Privacy Policy</Link>
                        <Link href={`/finland-overview`} className="link">Term of Services</Link>
                        <Link href={`/finland-overview`} className="link">Cookies settings</Link>
                    </div> */}
                    {nav_links.map((ele) => {
                        return (
                            <div className="div_link border-r border-gray-800" key={`link ${ele.title}`}>
                                <div className="font-medium text-xl text-indigo-300 pb-3">{ele.title}</div>
                                {ele.links.map(l => {
                                    return (
                                        <Link
                                            href={l.link}
                                            className="link"
                                            key={`link ${l.link_title}`}
                                            onClick={() => setHamburgerValue(false)}
                                        >{l.link_title}</Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            }
        </div >
    )
}

export default Header