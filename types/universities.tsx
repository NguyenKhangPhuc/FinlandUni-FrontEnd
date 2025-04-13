// export interface Admission {
//     entranceExam: string,
//     sat: string,
// }


// export interface Major {
//     majorName: string,
//     degreeType: string,
//     duration: string,
//     applicationPeriod: string,
//     language: string,
//     field: string,
//     admission: Admission,
//     majorOverview: string,
// }

// interface Majors {
//     bachelor: Array<Major>,
//     master: Array<Major>,
// }

export interface University {
    id: string,
    name: string,
    city: string,
    overview: string,
    ranking: string,
    tuition: string,
    scholarship: string,
    type: string,
    website: string,
}