interface Props {
    totalPage: number | undefined,
    receivedPage: number,
    handlePageChange: (page: number) => void
}

const Paginations = ({ totalPage, receivedPage, handlePageChange }: Props) => {

    ///This component contain the pagination part for the website
    ///It will create an array of numbers based on the number of page (totalPage value)
    ///to map over it, and show only the first, current, nearCurrent, and last page.
    ///the page that 2 step far away from the current page will be shown as dots.
    return (
        <div className=" flex p-3 gap-2 mt-5">
            {totalPage && Array.from({ length: totalPage }, (_, i) => i + 1).map(page => {
                const isFirst = page == 1
                const isCurrent = page == receivedPage
                const isNearCurrent = Math.abs(page - receivedPage) == 1;
                const isLast = page == totalPage
                const isDot = page == receivedPage + 2 || page == receivedPage - 2
                console.log()
                if (isCurrent || isFirst || isNearCurrent || isLast && page > 0 && page <= totalPage) {
                    return (
                        <button
                            key={`page ${page}`}
                            onClick={() => handlePageChange(page)}
                            className={`pagination ${page === receivedPage ? 'bg-gray-300 text-black' : 'bg-indigo-800'}`}
                        >
                            {page}
                        </button>
                    )
                } else if (isDot) {
                    return (
                        <div key={`dot ${page}`}>...</div>
                    )
                }
            })}
        </div>
    )
}

export default Paginations