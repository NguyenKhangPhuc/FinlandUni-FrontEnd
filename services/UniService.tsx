import axios from "axios"
import { Major, University } from "../types/universities";

const url: string = 'http://localhost:3005/api'


export const getUniversities = async (): Promise<Array<University>> => {
    const response = await axios.get<Array<University>>(url + '/universities');
    return response.data;
}

export const getUniversityById = async (uniID: string): Promise<University> => {
    const response = await axios.get<University>(url + `/universities/${uniID}`)
    return response.data
}

export const getMajorsByUni = async (uniID: string): Promise<Array<Major>> => {
    const response = await axios.get<Array<Major>>(url + `/universities/${uniID}/majors`)
    return response.data
}