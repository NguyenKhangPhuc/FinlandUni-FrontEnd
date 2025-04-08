"use client"
import { usePathname, useSearchParams } from "next/navigation";
import ListUni from "../../components/ListUni";
import universities from "../../data/UniData";
import { useRouter } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const query = searchParams.get('query') || ''
  const receivedPage = parseInt(searchParams.get('page') ?? '1', 10);
  const uniPerPage = 5;
  const filteredUniversities = universities.filter((uni) => {
    return uni.name.toLowerCase().includes(query.toLowerCase())
  })
  const totalPage = Math.ceil(filteredUniversities.length / uniPerPage);

  const handlePageChange = (p: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', p.toString())
    if (router) {
      router.push(`${pathname}?${params.toString()}`)
    }
  }
  return (
    <div className="w-full flex flex-col items-center text-white">
      <div
        className="header header-pop-up"
      >
        Danh sách đại học Phần Lan
      </div>
      <div
        className="p-5 header-pop-up"
      >Tìm thông tin về các trường đại học ở Phần Lan một cách dễ dàng
      </div>
      <div>
        <input
          placeholder="Tìm kiếm các trường đại học..."
          className="input-pop-up input w-[37rem] h-[2rem] "
        />
      </div>
      <ListUni />
      <div>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map(page => {
          return (
            <button
              key={`page ${page}`}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded ${page === receivedPage ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              {page}
            </button>
          )
        })}
      </div>
    </div>

  );
}
