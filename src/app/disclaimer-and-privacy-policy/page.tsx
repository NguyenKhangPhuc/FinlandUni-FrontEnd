export default function Home() {
    return (
        <div className="w-full flex flex-col items-center text-white mt-10">
            <div className="header w-full text-center pb-5">Disclaimer and Privacy Policy</div>
            <section className="w-2/3 text-white bg-gray-800 p-10 rounded-lg">

                <h2 className="text-indigo-500">Disclaimer</h2>
                <ul>
                    <li>The information provided on this website about universities in Finland is for general informational purposes only. While we strive to ensure that the content is accurate and up-to-date, we cannot guarantee that all the details are correct or complete. The details regarding university programs, fees, admissions, and other information are subject to change without notice. </li>
                    <li>We strongly recommend that you verify the information with the respective universities or official sources before making any decisions.</li>
                </ul>

                <h2 className="text-indigo-500">Privacy Policy</h2>
                <ul>
                    <li>This website is committed to protecting your privacy. We do not collect, store, or share any personal information from users.</li>
                </ul>

                <h2 className="text-indigo-500">Information We Collect</h2>
                <ul>
                    <li>We do not collect personal information such as names, email addresses, phone numbers, or any data that can personally identify users.</li>
                </ul>

                <h2 className="text-indigo-500">Cookies</h2>
                <ul>
                    <li>This website does not use cookies to collect information about users&apos; activities.</li>
                </ul>

                <h2 className="text-indigo-500">Data Security</h2>
                <ul>
                    <li>Since we do not collect personal data, data security concerns do not apply in this case.</li>
                </ul>

                <h2 className="text-indigo-500">Contact Us</h2>
                <ul>
                    <li>If you have any questions about our privacy policy, please feel free to contact us at nguyenkhangphuc012024@gmail.com.</li>
                </ul>

                <h2 className="text-indigo-500">Changes to This Privacy Policy</h2>
                <ul>
                    <li>We may update this privacy policy from time to time. Any changes will be posted on this page.</li>
                </ul>
            </section>
        </div>

    )
}