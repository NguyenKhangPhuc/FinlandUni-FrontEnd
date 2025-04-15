'use client'
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Major, University } from "../types/universities"
import { useDebouncedCallback } from "use-debounce"

const usePageService = (items: Array<University> | Array<Major> | undefined) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const query = searchParams.get('query') || ''
    const receivedPage = parseInt(searchParams.get('page') ?? '1', 10);
    const degreeOption = searchParams.get('degree') || ''
    const field = searchParams.get('field') || ''
    const itemsPerPage = 4;
    const filteredItems = items?.filter((uni) => {
        if ('name' in uni) {
            return uni.name.toLowerCase().includes(query.toLowerCase())
        } else {
            return uni.major.toLowerCase().includes(query.toLowerCase()) &&
                uni.degree.toLowerCase().includes(degreeOption.toLowerCase()) &&
                uni.studyField.toLowerCase().includes(field.toLowerCase())
        }

    })
    const start = (receivedPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems?.slice(start, start + itemsPerPage)
    const totalPage = filteredItems && Math.ceil(filteredItems.length / itemsPerPage);


    const scrollToElement = (value: string) => {
        const section = document.getElementById(value);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


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
        if (value == '') {
            params.set('degree', '')
            params.set('field', '')
        }
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('universities')
    }, 300)

    const handleDegreeChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('degree', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('major')

    }

    const handleFieldchange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('field', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('major')
    }


    return {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems,
        handleQueryChange,
        handleDegreeChange,
        handleFieldchange,
    }
}


export default usePageService