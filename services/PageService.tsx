'use client'
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { University } from "../types/universities"
import { useDebouncedCallback } from "use-debounce"

const usePageService = (universities: Array<University> | undefined) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const query = searchParams.get('query') || ''
    const receivedPage = parseInt(searchParams.get('page') ?? '1', 10);
    const uniPerPage = 4;
    const filteredUniversities = universities?.filter((uni) => {

        return uni.name.toLowerCase().includes(query.toLowerCase())
    })
    const start = (receivedPage - 1) * uniPerPage;
    const paginatedUniversities = filteredUniversities?.slice(start, start + uniPerPage)
    const totalPage = filteredUniversities && Math.ceil(filteredUniversities.length / uniPerPage);

    const handlePageChange = (p: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', p.toString())
        if (router) {
            router.push(`${pathname}?${params.toString()}`)
        }
    }

    const handleQueryChange = useDebouncedCallback((value: string) => {
        console.log(value)
        const params = new URLSearchParams(searchParams);
        params.set('query', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`)
        }
        const section = document.getElementById('universities');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300)

    return {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedUniversities,
        handleQueryChange,
    }
}


export default usePageService