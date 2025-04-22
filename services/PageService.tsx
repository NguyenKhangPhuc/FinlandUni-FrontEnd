'use client'
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Major, University } from "../types/universities"
import { useDebouncedCallback } from "use-debounce"

const usePageService = (items: Array<University> | Array<Major> | undefined) => {
    ///Get the current params lists
    const searchParams = useSearchParams()
    ///Get the current url
    const pathname = usePathname()
    ///Use for url modification (push)
    const router = useRouter()

    ///Get the 'query' params from the list of params
    const query = searchParams.get('query') || ''
    ///Get the 'page' params from the list of params
    const receivedPage = parseInt(searchParams.get('page') ?? '1', 10);
    ///Get the 'Degree' params from the list of params
    const degreeOption = searchParams.get('Degree') || ''
    ///Get the 'Field of studies' params from the list of params
    const field = searchParams.get('Field of studies') || ''
    ///Get the 'University' params from the list of params
    const uniType = searchParams.get('University') || ''
    ///Get the 'Field' params from the list of params
    const uniFieldType = searchParams.get('Field') || ''
    const itemsPerPage = 4;
    const filteredItems = items?.filter((uni) => {
        ///If the items is type of Array<University> => filter it with
        //'Field'(fieldOption), 'Query' (name), and 'University'(type) params.
        if ('name' in uni) {
            return uni.name.toLowerCase().includes(query.toLowerCase()) &&
                uni.type.toLowerCase().includes(uniType.toLowerCase()) &&
                uni.fieldOptions.some(f => f.toLowerCase().includes(uniFieldType.toLowerCase()))
        } else {
            ///If the items is type of Array<Majors>
            ///=> Filter it with 'Degree'(degree), 'Query' (name), and 'Field of studies'(studyField) params.
            return uni.major.toLowerCase().includes(query.toLowerCase()) &&
                uni.degree.toLowerCase().includes(degreeOption.toLowerCase()) &&
                uni.studyField.toLowerCase().includes(field.toLowerCase())
        }

    })

    ///start index of the items of currentPage.
    const start = (receivedPage - 1) * itemsPerPage;
    ///Slice the filtered items from the start index to start index + itemsPerPage(4)
    const paginatedItems = filteredItems?.slice(start, start + itemsPerPage)
    ///Calculate the totalPage based on the filtered items length.
    const totalPage = filteredItems && Math.ceil(filteredItems.length / itemsPerPage);


    const scrollToElement = (value: string) => {
        ///Scroll to the specific id html element with smooth behaviour
        const section = document.getElementById(value);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


    const handlePageChange = (p: number) => {
        ///Change the 'page' params based on the value given and push it to the url by useRouter.
        const params = new URLSearchParams(searchParams)
        params.set('page', p.toString())
        if (router) {
            router.push(`${pathname}?${params.toString()}`)
        }

    }

    const handleQueryChange = useDebouncedCallback((value: string) => {
        ///Change the 'query' params based on the value given and push it to the url by useRouter
        ///If the given value is empty, Change the 'Degree' and 'Field of studies' params to empty string
        ///and push it to the url by useRouter
        const params = new URLSearchParams(searchParams);
        params.set('query', value)
        params.set('page', '1')
        if (value == '') {
            params.set('Degree', '')
            params.set('Field of studies', '')
        }
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('universities')
    }, 300)

    const handleDegreeChange = (value: string) => {
        ///Change the 'Degree' params based on the value given, 'page' params to 1
        //and push it to the url by useRouter
        const params = new URLSearchParams(searchParams)
        params.set('Degree', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('major')

    }

    const handleFieldChange = (value: string) => {
        ///Change the 'Field of studies' params based on the value given, 'page' params to 1
        //and push it to the url by useRouter
        const params = new URLSearchParams(searchParams)
        params.set('Field of studies', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('major')
    }

    const handleUniTypeChange = (value: string) => {
        ///Change the 'University' params based on the value given, 'page' params to 1
        //and push it to the url by useRouter
        const params = new URLSearchParams(searchParams)
        params.set('University', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('universities')
    }

    const handleUniFieldType = (value: string) => {
        ///Change the 'Field' params based on the value given, 'page' params to 1
        //and push it to the url by useRouter
        const params = new URLSearchParams(searchParams)
        params.set('Field', value)
        params.set('page', '1')
        if (router) {
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }
        scrollToElement('universities')
    }

    return {
        totalPage,
        receivedPage,
        handlePageChange,
        paginatedItems,
        handleQueryChange,
        handleDegreeChange,
        handleFieldChange,
        handleUniTypeChange,
        handleUniFieldType,
    }
}


export default usePageService