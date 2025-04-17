import Image from 'next/image'
import fb from '../assets/fb_logo.png'
import linkedIn from '../assets/linkedIn.png'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center text-white mt-15 ">

            <div className="header p-5">About the website</div>
            <div className="w-2/3 p-6 bg-gray-800 rounded-lg text-center">
                The website provides information about universities in Finland, including their names, rankings, tuition fees, types, scholarships, and the fields of study offered by each university.
                Please note that all information on this website may contain inaccuracies.
                Treat the website as an objective tool, and if you notice any errors, feel free to provide feedback via my email or social media channels such as Facebook or LinkedIn❤.
            </div>
            <div className=" w-full p-2 mt-10 flex justify-center gap-20 items-center  text-[12px] bg-gray-800 ">
                <div className="opacity-70">Designed & built by Nguyen Khang Phuc</div>
                <div className='opacity-70'>© 2025 All rights reserved.</div>

                <div className='flex gap-3'>
                    <Link href='https://www.facebook.com/cogi.ko.5/'>
                        <Image
                            src={fb}
                            width={30}
                            height={30}
                            alt='facebook logo'
                            className='p-1 cursor-pointer duration-200 bg-indigo-600 rounded-lg'
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/khang-phuc-nguyen-a04809325/'>
                        <Image
                            src={linkedIn}
                            width={30}
                            height={30}
                            alt='linkedIn logo'
                            className='p-1 cursor-pointer duration-200 bg-indigo-600 rounded-lg'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer