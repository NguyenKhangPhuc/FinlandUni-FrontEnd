import Image from 'next/image'
import fb from '../src/app/assets/fb_logo.png'
import linkedIn from '../src/app/assets/linkedIn.png'
import Link from 'next/link'
const Footer = () => {
    ///This component contain the footer of the website
    return (
        <div className="w-full flex flex-col bg-gray-900/40  items-center text-white mt-15 text-center">
            <div className='sm:flex-row lg:w-5/6 w-full flex  flex-col border-b  border-gray-800 rounded-lg p-5 gap-5'>
                <div className='sm:p-5 flex-1 flex flex-col p-2 items-center border-r  border-gray-800'>
                    <div className='sm:text-[22px] pb-5 font-bold text-[12px]'>FinUnies</div>
                    <div className='lg:text-lg text-sm'>A place where people can find information about universities in Finland (location, tuition fees, majors,...etc)</div>
                </div>
                <div className='sm:p-5 flex-1 flex flex-col p-2 items-center border-r border-gray-800'>
                    <div className='sm:text-[22px] pb-5 font-bold text-[12px]'>External links</div>
                    <a href='https://opintopolku.fi/konfo/en/' className='underline text-blue-500 lg:text-lg text-sm'>Studyinfo</a>
                    <a href='https://www.workinfinland.com/en/' className='underline text-blue-500 lg:text-lg text-sm'>Work in Finland</a>
                </div>
                <div className='sm:p-5 flex-1 flex flex-col p-2 items-center border-r border-gray-800'>
                    <div className='sm:text-[22px] pb-5 font-bold text-[12px]'>Contact us by</div>
                    <Link href={`https://www.facebook.com/`} className='flex items-center underline text-blue-500 lg:text-lg text-sm'><Image src={fb} width={20} alt='fb' />Facebook</Link>
                    <Link href={`https://www.instagram.com/khang_phucs/`} className='flex items-center underline text-blue-500 lg:text-lg text-sm'>
                        <Image src={linkedIn} width={20} alt='fb' />Instagram
                    </Link>
                    <Link href={`https://www.linkedin.com/in/khang-phuc-nguyen-a04809325/`} className='flex items-center underline text-blue-500 lg:text-lg text-sm'>
                        <Image src={linkedIn} width={20} alt='fb' />LinkedIn
                    </Link>
                </div>
            </div>
            <div className='lg:w-full sm:flex-row w-full  flex flex-col p-7 text-center justify-around'>
                <div>© FinUnies</div>
                <div>Designed and built by Khang Phuc Nguyen</div>
                <Link href={`/disclaimer-and-privacy-policy`} className='underline text-blue-500'>Privacy Policy</Link>
                <Link href={`/terms-of-service`} className='underline text-blue-500'>Terms of services</Link>
            </div>
        </div>
    )
}

export default Footer