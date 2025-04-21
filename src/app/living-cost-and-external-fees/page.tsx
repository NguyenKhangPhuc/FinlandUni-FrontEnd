export default function Home() {
    return (
        <div className="w-full flex flex-col items-center text-white mt-10">
            <div className="header w-full text-center">Living cost and external fees in Finland</div>
            <div className="w-2/3 text-center opacity-70 pb-5">High-quality education is an investment in your future. Be ready to budget for tuition fees and daily living expenses. After all, great opportunities often come with a cost — and in this case, it’s truly worth it!</div>
            <section className="w-2/3 text-white bg-gray-800 p-10 rounded-lg">

                <h2 className="text-indigo-500">Tuition fees</h2>
                <ul>
                    <li>Students from outside the EU/EEA are required to pay tuition fees for bachelor’s and master’s degree programs taught in English.</li>
                    <li>
                        These fees typically range between €8,000 and €20,000 per year, depending on the university and the specific program. For exact tuition costs, it&apos;s best to check on <a href="https://opintopolku.fi/konfo/en/" className="underline text-blue-500">
                            Studyinfo.fi
                        </a> or consult the website of the university you&apos;re applying to.
                    </li>
                    <li>If you are required to pay tuition, you are usually also eligible to apply for scholarships provided by that university.</li>
                    <li>Doctoral programs are tuition-free for all students, regardless of their nationality.</li>
                </ul>

                <h2 className="text-indigo-500">Living Costs</h2>
                <ul>
                    <li>In addition to tuition, you’ll need to finance your living expenses on your own.</li>
                    <li>Although the Finnish Immigration Service (Migri) requires a minimum of €800 per month, it’s wise to budget around €900 to €1000 per month to comfortably cover necessities like housing, food, and transportation, as Finland is known for its relatively high cost of living.</li>
                    <li>When applying for a <a className="underline text-blue-500" href="https://www.studyinfinland.fi/admissions/student-residence-permit">student residence permit</a>, you must show proof of <a className="underline text-blue-500" href="https://migri.fi/en/income-requirement-for-students">sufficient financial resources</a> and valid <a className="underline text-blue-500" href="https://migri.fi/en/insurance">health insurance</a>.</li>
                    <li>Keep in mind that securing a part-time job during your studies can be difficult, especially if you don’t speak Finnish or Swedish, so it’s best not to rely on part-time work to support yourself financially while studying.</li>
                </ul>


                <h2 className="text-indigo-500">Student Union Fees</h2>
                <ul>
                    <li>Students enrolled in universities typically pay a yearly student union fee ranging from €50 to €70, which gives them access to various benefits such as discounts on meals at student cafeterias and reduced fares on public transportation.</li>
                    <li>At universities of applied sciences (UAS), joining the student union is optional.</li>
                    <li>Your university in Finland can offer guidance on student union fees, healthcare contributions, and other important practical matters.</li>
                </ul>

                <h2 className="text-indigo-500">Student Healthcare Fee</h2>
                <ul>
                    <li>
                        If you&apos;re pursuing a bachelor’s or master’s degree, you&apos;ll need to pay a <a href="https://www.kela.fi/faq-about-the-healthcare-fee-in-higher-education" className="underline text-blue-500">student healthcare fee</a> to access services provided by the <a href="https://www.yths.fi/en/frontpage/" className="underline text-blue-500">Finnish Student Health Service (FSHS)</a>. This fee is currently around €35 per semester, totaling approximately €70 per academic year.

                    </li>
                </ul>
            </section>
        </div>

    )
}