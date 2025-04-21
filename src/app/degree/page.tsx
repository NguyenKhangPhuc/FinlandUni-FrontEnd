export default function Home() {
    return (
        <div className="w-full flex flex-col items-center text-white mt-10">
            <div className="header w-full text-center">About Degrees</div>
            <div className="w-2/3 text-center opacity-70 pb-5">Explore nearly 600 bachelor’s and master’s programs offered in English in Finland. Whether you&apos;re looking to boost your career or delve into research and doctoral studies, Finland provides a wide range of opportunities to help you expand your knowledge and pursue your academic goals.</div>
            <section className="w-2/3 text-white bg-gray-800 p-10 rounded-lg">

                <h2 className="text-indigo-500">How to start?</h2>
                <ul>
                    <li>Ready to start your journey? Browse the array of English-taught programmes through the <a href="https://studyinfo.fi/" className="underline text-blue-500">Studyinfo.fi</a> portal or directly on the universities&apos; websites. </li>
                </ul>

                <h2 className="text-indigo-500">Bachelor, Master, and Doctoral degrees</h2>
                <ul>
                    <li>Begin your journey with your upper secondary school certificate. <strong>University bachelor&apos;s degrees</strong> typically take 3 years to complete (approximately 180 ETCS), while UAS degrees range from 3.5 to 4.5 years (approximately 210 - 240 ETCS), offering a pathway to a successful career and the potential to pursue a master’s degree later.</li>
                    <li><strong>University master’s programs</strong> typically often take 2 years (120 ETCS) to complete, while <strong>UAS master&apos;s programs</strong> are often slightly shorter, ranging from 1 to 1.5 years (60-90 ETCS). If you’re looking at a UAS master’s, keep in mind that 2 years of relevant work experience in your field is a prerequisite.</li>
                    <li>Embark on around 4 years of doctoral studies at one of our universities. For more information, don&apos;t hesitate to contact the universities directly.</li>
                </ul>
            </section>
        </div>

    )
}