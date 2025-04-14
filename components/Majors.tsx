"use client"
import usePageService from "../services/PageService"
import { Major } from "../types/universities"

const Majors = ({ majors }: { majors: Array<Major> }) => {
    const { totalPage, receivedPage, handlePageChange, paginatedItems, handleQueryChange } = usePageService(majors)

    console.log(totalPage, receivedPage, handlePageChange, paginatedItems, handleQueryChange)

    return (
        <div></div>
    )
}

export default Majors