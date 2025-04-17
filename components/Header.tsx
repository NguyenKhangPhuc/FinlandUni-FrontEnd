import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full flex flex-col items-center bg-black text-white">
            <div className=" link-pop-up text-sm">
                Information about each universities are being added, please provide feedback
                <a href="https://www.linkedin.com/in/khang-phuc-nguyen-a04809325/" className="text-blue-400 text-sm italic"> here</a>
            </div>
            <div className="p-10 flex gap-5">
                <Link href='/' className="link link-pop-up">Home</Link>
                <Link href='/finland-overview' className="link link-pop-up">About Finland</Link>
                <Link href='/donation' className="link link-pop-up">Donation</Link>
            </div>
        </div>
    )
}

export default Header