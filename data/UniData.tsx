import { University } from "../types/universities";

const data: Array<University> = [
    {
        "id": "aalto",
        "name": "Aalto University",
        "city": "Espoo",
        "overview": "Aalto University is a leading university in Finland, renowned for its strengths in technology, business, and arts. It is located in Espoo, near the capital Helsinki, and offers a modern and creative learning environment. Around 25% of the students are international, creating a dynamic multicultural community.",
        "ranking": "1",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Digital Systems and Design, Bachelor of Science and Master of Science(Technology)",
                    "degreeType": "Bachelor studies",
                    "duration": "3 + 2 years, full-time",
                    "applicationPeriod": "8 Jan 2025 - 23 Jan 2025",
                    "language": "English",
                    "field": "Technology and Engineering",
                    "majorOverview": "Digital Systems and Design will make you an expert at the intersection between electrical engineering and design, with the hands-on skills to lead in your field.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ],
            "master": []
        },
        "tuition": "Free tuition for EU/EEA students; for international students, tuition ranges from €12,000 to €18,000 per year.",
        "scholarship": "100%",
        "entryRequirements": "High school diploma, English language certificate such as IELTS or TOEFL, and an excellent academic record are required.",
        "type": "Research University",
        "website": "https://www.aalto.fi/en"
    }
    , {
        "id": "helsinki",
        "name": "University of Helsinki",
        "city": "Helsinki",
        "overview": "The University of Helsinki is the oldest and largest university in Finland. It is internationally recognized for its high-quality research and teaching. Located in the capital city, the university offers a wide range of academic programs and is known for its vibrant student life.",
        "ranking": "2",
        "majors": {
            "bachelor": [],
            "master": [
                {
                    "majorName": "Data Science, Master of Science",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "1 Dec 2024 - 3 Jan 2025",
                    "language": "English",
                    "field": "Computer Science and Data",
                    "majorOverview": "The Master’s Programme in Data Science combines elements from computer science and statistical sciences to provide you with the skills for working in data-intensive areas.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Free tuition for EU/EEA students; international students pay around €13,000 per year.",
        "scholarship": "100%",
        "entryRequirements": "A relevant bachelor's degree, English proficiency certificate (e.g. IELTS, TOEFL), and strong academic background.",
        "type": "Research University",
        "website": "https://www.helsinki.fi/en"
    },
    {
        "id": "tampere",
        "name": "Tampere University",
        "city": "Tampere",
        "overview": "Tampere University is a multidisciplinary institution with strong expertise in technology, health, and society. The university fosters innovation and entrepreneurship and has close ties to the business world.",
        "ranking": "3",
        "majors": {
            "bachelor": [],
            "master": [
                {
                    "majorName": "Biomedical Sciences and Engineering, Master of Science (Technology)",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "4 Dec 2024 - 3 Jan 2025",
                    "language": "English",
                    "field": "Health Technology and Life Sciences",
                    "majorOverview": "This program focuses on combining biology and engineering, providing students with skills in medical technology and health applications.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Free for EU/EEA students; for others, tuition is around €12,000 per year.",
        "scholarship": "50–100% tuition fee waiver",
        "entryRequirements": "Bachelor’s degree in a relevant field, English proficiency certificate, and academic transcripts.",
        "type": "Research University",
        "website": "https://www.tuni.fi/en"
    },
    {
        "id": "oulu",
        "name": "University of Oulu",
        "city": "Oulu",
        "overview": "The University of Oulu is one of the largest universities in Finland, known for its research in technology, health, and environmental sciences. Located in Northern Finland, the university offers a peaceful and inspiring setting for students.",
        "ranking": "4",
        "majors": {
            "bachelor": [],
            "master": [
                {
                    "majorName": "Environmental Engineering, Master of Science",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "3 Jan 2025 - 17 Jan 2025",
                    "language": "English",
                    "field": "Environmental Science and Engineering",
                    "majorOverview": "This program educates professionals with a strong foundation in environmental engineering, including water and waste management, environmental protection, and circular economy.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Free tuition for EU/EEA students; international students pay about €10,000 per year.",
        "scholarship": "Partial and full scholarships available",
        "entryRequirements": "A bachelor’s degree in a related field, proof of English language proficiency, and good academic results.",
        "type": "Research University",
        "website": "https://www.oulu.fi/en"
    },
    {
        "id": "turku",
        "name": "University of Turku",
        "city": "Turku",
        "overview": "The University of Turku is an internationally competitive university known for its high-quality education and extensive research. It is located in a historic city and offers a wide variety of programs in English.",
        "ranking": "5",
        "majors": {
            "bachelor": [],
            "master": [
                {
                    "majorName": "Global Innovation Management, Master of Science in Economics and Business Administration",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "1 Dec 2024 - 17 Jan 2025",
                    "language": "English",
                    "field": "Business and Economics",
                    "majorOverview": "This program prepares students to manage innovation processes globally, combining business strategy, marketing, and international management.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Free for EU/EEA students; international tuition is around €10,000 per year.",
        "scholarship": "25%, 50%, or 100% tuition waiver",
        "entryRequirements": "Relevant bachelor’s degree, English language proficiency, and solid academic background.",
        "type": "Research University",
        "website": "https://www.utu.fi/en"
    },
    {
        "id": "lut",
        "name": "LUT University",
        "city": "Lappeenranta",
        "overview": "LUT University is a pioneering science university in Finland that focuses on clean energy, water, and sustainability. It offers practical education and industry-relevant programs in technology and business.",
        "ranking": "6",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Technology and Engineering Science, Bachelor of Science (Technology)",
                    "degreeType": "Bachelor studies",
                    "duration": "3 + 2 years, full-time",
                    "applicationPeriod": "1 Jan 2025 - 17 Jan 2025",
                    "language": "English",
                    "field": "Technology",
                    "majorOverview": "This program provides a broad foundation in engineering and technology with opportunities to specialize during master's studies.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "Required"
                    }
                }
            ],
            "master": []
        },
        "tuition": "Free for EU/EEA students; €9,000 to €13,500 per year for non-EU/EEA students.",
        "scholarship": "50% to 100% tuition fee waiver",
        "entryRequirements": "High school diploma or equivalent, SAT scores for bachelor's admission, English proficiency (IELTS, TOEFL).",
        "type": "Science University",
        "website": "https://www.lut.fi/en"
    },
    {
        "id": "eastern-finland",
        "name": "University of Eastern Finland",
        "city": "Joensuu",
        "overview": "The University of Eastern Finland is a multidisciplinary university that emphasizes research and education in the fields of health, environmental sciences, and natural sciences. Located in the eastern part of Finland, it offers a peaceful study environment with a strong international presence.",
        "ranking": "7",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Environmental Science, Bachelor of Science",
                    "degreeType": "Bachelor studies",
                    "duration": "3 years, full-time",
                    "applicationPeriod": "5 Jan 2025 - 15 Jan 2025",
                    "language": "English",
                    "field": "Environmental Science",
                    "majorOverview": "This program offers a broad understanding of environmental challenges, sustainable development, and environmental management strategies.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ],
            "master": [
                {
                    "majorName": "Health and Environmental Risks, Master of Science",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "1 Dec 2024 - 15 Jan 2025",
                    "language": "English",
                    "field": "Health and Environmental Science",
                    "majorOverview": "The program focuses on understanding the links between environmental risks and health, providing tools to tackle global health challenges related to environmental changes.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Free tuition for EU/EEA students; non-EU/EEA students pay approximately €12,000 per year.",
        "scholarship": "50% to 100% tuition fee waiver",
        "entryRequirements": "A bachelor's degree in a related field, proof of English language proficiency, and relevant academic background.",
        "type": "Research University",
        "website": "https://www.uef.fi/en"
    },
    {
        "id": "haaga-helia",
        "name": "Haaga-Helia University of Applied Sciences",
        "city": "Helsinki",
        "overview": "Haaga-Helia University of Applied Sciences is a leading institution in Finland offering high-quality education focused on business, technology, and service sectors. The university is known for its strong links to industry and practical approach to learning, preparing students for real-world challenges.",
        "ranking": "8",
        "majors": {
            "bachelor": [
                {
                    "majorName": "International Business, Bachelor of Business Administration",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "10 Jan 2025 - 24 Jan 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program prepares students for global business roles, focusing on international markets, business strategies, and entrepreneurship.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ],
            "master": [
                {
                    "majorName": "Master's Programme in Business Management",
                    "degreeType": "Master studies",
                    "duration": "1.5 years, full-time",
                    "applicationPeriod": "15 Nov 2024 - 31 Dec 2024",
                    "language": "English",
                    "field": "Business Management",
                    "majorOverview": "This master's program enhances leadership and management skills, focusing on strategic decision-making and innovation in business.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Tuition fees for non-EU/EEA students are approximately €8,000 to €12,000 per year. Free for EU/EEA students.",
        "scholarship": "50% tuition fee waiver available for non-EU/EEA students.",
        "entryRequirements": "Completion of a secondary education or a bachelor's degree, proof of English language proficiency, and a strong academic background.",
        "type": "UAS",
        "website": "https://www.haaga-helia.fi/en"
    },
    {
        "id": "lab",
        "name": "LAB University of Applied Sciences",
        "city": "Lahti",
        "overview": "LAB University of Applied Sciences is a prominent institution in Finland offering education in engineering, business, and health sciences. The university focuses on practical, hands-on learning and has strong collaborations with industry, providing students with skills to succeed in a global market.",
        "ranking": "9",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor’s Programme in Business Management",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "15 Jan 2025 - 31 Jan 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program focuses on international business, management, and entrepreneurship, preparing students for leadership roles in the global business environment.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ],
            "master": [
                {
                    "majorName": "Master’s Programme in Strategic Business Development",
                    "degreeType": "Master studies",
                    "duration": "1.5 years, full-time",
                    "applicationPeriod": "15 Nov 2024 - 15 Dec 2024",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This master's program focuses on strategic business development, innovation, and leadership in a rapidly changing business landscape.",
                    "admission": {
                        "entranceExam": "none",
                        "sat": "none"
                    }
                }
            ]
        },
        "tuition": "Tuition fees for non-EU/EEA students are approximately €9,000 to €12,000 per year. Free for EU/EEA students.",
        "scholarship": "50% tuition fee waiver available for non-EU/EEA students.",
        "entryRequirements": "Completion of a secondary education or a bachelor’s degree, proof of English language proficiency, and a strong academic record.",
        "type": "UAS",
        "website": "https://www.lab.fi/en"
    },
    {
        id: "centria",
        name: "Centria University of Applied Sciences",
        city: "Kokkola",
        overview: "Centria University of Applied Sciences is a multi-disciplinary university of applied sciences in Finland, established in 1995 after the merger of three regional colleges in Kokkola, Pietarsaari, and Ylivieska. The university has approximately 4,200 students and 320 staff, offering bachelor's and master's degree programs in fields such as technology, business, social sciences, healthcare, culture, and humanities.",
        ranking: "Not Available",
        majors: {
            bachelor: [
                {
                    majorName: "Bachelor’s Programme in Business Administration",
                    degreeType: "Bachelor studies",
                    duration: "3.5 years, full-time",
                    applicationPeriod: "TBD",
                    language: "English",
                    field: "Business",
                    majorOverview: "The program equips students with the skills necessary for business management and entrepreneurship in a global context.",
                    admission: { entranceExam: "none", sat: "none" },
                },
                {
                    majorName: "Bachelor’s Programme in Information Technology",
                    degreeType: "Bachelor studies",
                    duration: "3.5 years, full-time",
                    applicationPeriod: "TBD",
                    language: "English",
                    field: "Technology",
                    majorOverview: "The program provides a solid foundation in computer science, software development, and IT management, preparing students for roles in the tech industry.",
                    admission: { entranceExam: "none", sat: "none" },
                }
            ],
            master: [],
        },
        scholarship: "50-100%",
        tuition: "Tuition fees range from €10,000 to €12,000/year for non-EU/EEA students. Free for EU/EEA students.",
        entryRequirements: "Requirements include a high school diploma or equivalent, English proficiency (IELTS 6.0, TOEFL 80, etc.), and good academic standing.",
        type: "UAS",
        website: "https://www.centria.fi/en"
    },
    {
        "id": "jamk",
        "name": "JAMK University of Applied Sciences",
        "city": "Jyväskylä",
        "overview": "JAMK University of Applied Sciences is a multidisciplinary higher education institution located in Jyväskylä, Central Finland. With a student body of over 8,500 and a staff of approximately 900, JAMK offers a diverse range of bachelor's and master's degree programs, emphasizing practical skills and close collaboration with industries. The university is committed to continuous development and innovation in various fields.",
        "ranking": "Not Available",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor’s Programme in Automation and Robotics",
                    "degreeType": "Bachelor studies",
                    "duration": "4 years, full-time",
                    "applicationPeriod": "8 Jan 2025 – 22 Jan 2025",
                    "language": "English",
                    "field": "Engineering",
                    "majorOverview": "This program provides a strong foundation in automation and electrical engineering, preparing students for continuous professional development in the field.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                },
                {
                    "majorName": "Bachelor’s Programme in Business Information Technology",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "8 Jan 2025 – 22 Jan 2025",
                    "language": "English",
                    "field": "Information Technology",
                    "majorOverview": "Focusing on game production, this program offers opportunities to specialize in game arts or game design, equipping students with comprehensive skills in the field.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ],
            "master": [
                {
                    "majorName": "Master’s Programme in International Business Management",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "TBD",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program is designed for professionals aiming to enhance their international business skills and strategic management capabilities.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ]
        },
        "tuition": "Tuition fees are €9,000 per year for non-EU/EEA students. EU/EEA students may have different fee structures.",
        "scholarship": "JAMK offers scholarships that can significantly reduce tuition fees for eligible students.",
        "entryRequirements": "Applicants are required to have a high school diploma or equivalent, proof of English language proficiency, and meet specific program prerequisites.",
        "type": "UAS",
        "website": "https://www.jamk.fi/en"
    },
    {
        "id": "metropolia",
        "name": "Metropolia University of Applied Sciences",
        "city": "Helsinki",
        "overview": "Metropolia University of Applied Sciences is the largest university of applied sciences in Finland, located in the Helsinki metropolitan area. It offers a wide range of degree programs in business, engineering, health care, and social services. Metropolia emphasizes innovative and high-quality education and is closely tied to the labor market, providing students with a solid foundation for professional success.",
        "ranking": "Not Available",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor’s Programme in Business Administration",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "8 Jan 2025 – 22 Jan 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "The Business Administration program provides students with comprehensive knowledge in business management, marketing, and entrepreneurship. It aims to prepare students for dynamic careers in various business fields.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                },
                {
                    "majorName": "Bachelor’s Programme in Information Technology",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "8 Jan 2025 – 22 Jan 2025",
                    "language": "English",
                    "field": "Information Technology",
                    "majorOverview": "This program covers various aspects of software development, systems management, and IT infrastructure. Students will gain skills to design, implement, and manage IT systems and software solutions.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                },
                {
                    "majorName": "Bachelor’s Programme in Health Care",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "8 Jan 2025 – 22 Jan 2025",
                    "language": "English",
                    "field": "Health Care",
                    "majorOverview": "This program focuses on healthcare and nursing, preparing students to work in diverse health service settings and to meet the needs of the aging population and healthcare system.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ],
            "master": [
                {
                    "majorName": "Master’s Programme in International Business Management",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "TBD",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "The Master's Programme in International Business Management is designed for professionals who wish to advance their careers in the global business environment, focusing on strategic leadership, international marketing, and management.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ]
        },
        "tuition": "Tuition fees are €9,000 per year for non-EU/EEA students. EU/EEA students may have different fee structures.",
        "scholarship": "Metropolia offers scholarships that can reduce tuition fees for eligible non-EU/EEA students.",
        "entryRequirements": "Applicants must have a high school diploma or equivalent, meet specific program prerequisites, and demonstrate proficiency in English.",
        "type": "UAS",
        "website": "https://www.metropolia.fi/en"
    },
    {
        "id": "oamk",
        "name": "Oulu University of Applied Sciences",
        "city": "Oulu",
        "overview": "Oulu University of Applied Sciences (OAMK) is one of Finland's leading universities of applied sciences, known for its expertise in technology, health care, and business. The university fosters innovation, practical skills, and close collaboration with the industry, with a focus on preparing students for professional careers.",
        "ranking": "7",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor’s Programme in Information Technology",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "3 Jan 2025 – 17 Jan 2025",
                    "language": "English",
                    "field": "Information Technology",
                    "majorOverview": "The Bachelor’s Programme in Information Technology provides comprehensive knowledge in software development, networking, and IT management, preparing students for the dynamic tech industry.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ],
            "master": [
                {
                    "majorName": "Master’s Programme in Health and Welfare Management",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "1 Dec 2024 – 3 Jan 2025",
                    "language": "English",
                    "field": "Health and Welfare",
                    "majorOverview": "This programme equips students with the skills needed for leadership positions in health and welfare organizations, focusing on management, policy, and innovation in the sector.",
                    "admission": { "entranceExam": "none", "sat": "none" }
                }
            ]
        },
        "scholarship": "50-100%",
        "tuition": "Tuition fees for non-EU/EEA students range from €8,000 to €10,000 per year. EU/EEA students are exempt from tuition fees.",
        "entryRequirements": "Required completion of upper secondary school or a relevant bachelor’s degree, English language proficiency (IELTS 6.0, TOEFL 80), and a strong academic record.",
        "type": "UAS",
        "website": "https://www.oamk.fi/en"
    },
    {
        "id": "vaasa",
        "name": "Vaasa University of Applied Sciences",
        "city": "Vaasa",
        "overview": "University of Vaasa is a multidisciplinary University of Applied Sciences (UAS) focused on business, technology, and communications. The university offers practical, career-oriented education and close connections with local businesses and industries, providing students with real-world learning opportunities.",
        "ranking": "NA",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor's Programme in Business Administration",
                    "degreeType": "Bachelor studies",
                    "duration": "3.5 years, full-time",
                    "applicationPeriod": "Jan 3, 2025 – Jan 17, 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "The program focuses on providing students with the knowledge and skills necessary for success in the global business environment. It covers business strategy, marketing, and management.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ],
            "master": [
                {
                    "majorName": "Master's Programme in International Business and Entrepreneurship",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "Jan 8, 2025 – Jan 22, 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program prepares students to lead and manage businesses in an international context, with a focus on entrepreneurship, innovation, and cross-cultural management.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ]
        },
        "scholarship": "50-100%",
        "tuition": "Tuition fees for international students range from €10,000 to €12,000 per year. Free for EU/EEA students.",
        "entryRequirements": "Completion of high school or equivalent bachelor’s degree, English proficiency certificate (IELTS, TOEFL, etc.), and strong academic record.",
        "type": "UAS",
        "website": "https://www.univaasa.fi/en"
    },
    {
        "id": "turku_uas",
        "name": "Turku University of Applied Sciences",
        "city": "Turku",
        "overview": "Turku University of Applied Sciences (TUAS) is a modern university focusing on providing high-quality, practical education in fields such as engineering, business, health care, and social services. TUAS collaborates closely with industries to provide students with real-world learning experiences.",
        "ranking": "NA",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor's Programme in Information Technology",
                    "degreeType": "Bachelor studies",
                    "duration": "4 years, full-time",
                    "applicationPeriod": "Jan 1, 2025 – Jan 31, 2025",
                    "language": "English",
                    "field": "Technology",
                    "majorOverview": "This program offers education in software development, networking, and systems design, preparing students for a career in the IT industry.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ],
            "master": [
                {
                    "majorName": "Master's Programme in Business and Management",
                    "degreeType": "Master studies",
                    "duration": "2 years, full-time",
                    "applicationPeriod": "Feb 15, 2025 – Feb 28, 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program is designed for professionals seeking to develop advanced management and business skills, focusing on leadership, innovation, and strategic thinking.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ]
        },
        "scholarship": "50-100%",
        "tuition": "Tuition fees for non-EU/EEA students range from €8,000 to €10,000 per year. Free for EU/EEA students.",
        "entryRequirements": "Completion of high school for bachelor's programs or a relevant bachelor’s degree for master's programs, English proficiency certificate (IELTS, TOEFL, etc.), and strong academic record.",
        "type": "UAS",
        "website": "https://www.tuas.fi"
    },
    {
        "id": "tamk_uas",
        "name": "Tampere University of Applied Sciences",
        "city": "Tampere",
        "overview": "Tampere University of Applied Sciences (TAMK) is one of the leading universities of applied sciences in Finland, known for its innovative and practical approach to education. It offers a wide range of bachelor’s and master’s degree programs in various fields, including business, technology, health, and culture. TAMK focuses on providing students with real-world experiences and strong industry connections.",
        "ranking": "NA",
        "majors": {
            "bachelor": [
                {
                    "majorName": "Bachelor's Programme in International Business",
                    "degreeType": "Bachelor studies",
                    "duration": "4 years, full-time",
                    "applicationPeriod": "Jan 5, 2025 – Jan 19, 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "The International Business program prepares students for an international career in business by offering courses in marketing, finance, and management, with a focus on global business practices.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                },
                {
                    "majorName": "Bachelor's Programme in Information and Communication Technology",
                    "degreeType": "Bachelor studies",
                    "duration": "4 years, full-time",
                    "applicationPeriod": "Jan 5, 2025 – Jan 19, 2025",
                    "language": "English",
                    "field": "Technology",
                    "majorOverview": "This program offers courses in software engineering, network technologies, and IT infrastructure, equipping students with the skills required for various IT-related careers.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ],
            "master": [
                {
                    "majorName": "Master's Programme in Business Management",
                    "degreeType": "Master studies",
                    "duration": "2 years, part-time",
                    "applicationPeriod": "Feb 1, 2025 – Feb 15, 2025",
                    "language": "English",
                    "field": "Business",
                    "majorOverview": "This program focuses on advanced business management topics including strategy, leadership, and innovation, designed for professionals seeking to advance their career.",
                    "admission": { "entranceExam": "none", "sat": "optional" }
                }
            ]
        },
        "scholarship": "50-100%",
        "tuition": "Tuition fees for non-EU/EEA students range from €8,000 to €10,000 per year. Free for EU/EEA students.",
        "entryRequirements": "Completion of high school for bachelor's programs or a relevant bachelor’s degree for master's programs, English proficiency certificate (IELTS, TOEFL, etc.), and a good academic record.",
        "type": "UAS",
        "website": "https://www.tamk.fi"
    },

];


export default data