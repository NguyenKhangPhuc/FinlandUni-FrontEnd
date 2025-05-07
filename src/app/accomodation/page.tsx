export default function Home() {
    ///Contain design and content of accomodation page.
    return (
        <div className="w-full flex flex-col items-center text-white mt-10">
            <div className="header w-full text-center">Accomodation</div>
            <div className="w-2/3 text-center opacity-70 pb-5">Finding a Home in Finland: Start Early, Stay Ready!</div>
            <section className="lg:w-2/3 lg:p-10 w-full text-white bg-gray-800 p-10 rounded-lg">

                <h2 className="text-indigo-500">Student Housing in Finland</h2>
                <ul>
                    <li>When it comes to finding a place to live in Finland as a student, you’ll usually choose between two main options: student housing foundations or the private rental market.</li>
                    <li>
                        For affordable accommodation, student housing foundations are a great place to start. You can find a nationwide list at <a href="https://www.soa.fi/en/home.html" className="underline text-blue-500">SOA (Finnish Student Housing Ltd.)</a>. One notable example is <a href="https://www.psoas.fi/en/" className="underline text-blue-500">PSOAS</a> (Pohjois-Suomen opiskelija-asuntosäätiö), which provides reasonably priced housing for students in Oulu. They offer a variety of options, from shared apartments to studio flats and family housing
                    </li>
                    <li>In general, the cost of a room in a shared student apartment ranges between €200 and €350 per month, depending on the city and housing type. Studios and family apartments are more private but typically come with higher rent and longer wait times.</li>
                    <li>For personalized advice, it’s best to contact your admitting university, as they often offer useful guidance and local housing resources on their websites.</li>
                    <li>Alternatively, you can explore the open rental market through housing platforms or social media groups. Just keep in mind that private market rents are usually higher, and it may take more effort to find suitable listings.</li>
                </ul>
            </section>
        </div>

    )
}