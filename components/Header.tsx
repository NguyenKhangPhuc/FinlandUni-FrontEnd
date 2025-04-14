import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full flex flex-col items-center bg-black text-white">
            <div>
                Các trường đại học và học viện khác đang được thêm vào hàng ngày. Góp ý cho trang web
                <a href="https://www.facebook.com/cogi.ko.5/" className="text-blue-400"> tại đây</a>
            </div>
            <div className="p-10 flex gap-5">
                <Link href='/' className="link link-pop-up">Trang chủ</Link>
                <Link href='/finland-overview' className="link link-pop-up">Giới thiệu</Link>
                <Link href='/event' className="link link-pop-up">Sự kiện gần đây</Link>
            </div>
        </div>
    )
}

export default Header