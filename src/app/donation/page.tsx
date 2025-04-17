import Image from "next/image"
import qr_code from '../assets/QR_CODE.png'
export default function Home() {
    return (
        <div className="w-full flex flex-col items-center text-white">
            <h1 className="w-full text-center pb-5">Donation</h1>
            <section className="w-2/3 text-white bg-gray-800 p-5 rounded-lg flex flex-col items-center text-center">
                <Image
                    src={qr_code}
                    alt="qr_code"
                    width={300}
                    height={300}
                    className="w-[300px] h-[300px] min-w-[300px] min-h-[300px] object-contain rounded-lg"
                />
                <h2 className="w-full text-center">Donation information</h2>
                <li className="text-lg">Name: <strong>Nguyen Khang Phuc</strong></li>
                <li className="text-lg">Content: <strong>Donation for unireviews web</strong></li>
                <div className="text-lg italic text-indigo-500">This website was designed and built by me, with the goal of providing helpful information for everyone.</div>
                <div className="text-lg italic text-indigo-500">Right now, I&apos;m seeking donations to help maintain the site, so it can remain free and accessible to all users.</div>
                <div className="text-lg italic text-indigo-500">No matter how big or small your donation is, it will be a meaningful contribution to the site’s growth, and
                    I truly appreciate your support❤️</div>
                <div className="text-lg italic text-indigo-500">Thank you so much!</div>
            </section>
        </div>
    )
}