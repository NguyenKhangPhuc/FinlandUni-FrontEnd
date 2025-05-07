import axios from "axios"
import { Major, University } from "../types/universities";

const url: string = 'https://finlanduni-server.onrender.com/api'


export const getUniversities = async (): Promise<Array<University>> => {
    /// Fetch all the universities in the database
    try {
        const response = await axios.get<Array<University>>(url + '/universities');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to fetch universities. Server error: ${error?.response?.data.error}`);
        }
        throw new Error(`Failed to fetch universities. Error unknown`)
    }
}

export const getUniversityById = async (uniID: string): Promise<University> => {
    /// Fetch the specific university by the ID
    try {
        const response = await axios.get<University>(url + `/universities/${uniID}`)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to specific university. Server error: ${error?.response?.data.error}`);
        }
        throw new Error(`Failed to specific university. Error unknown`)
    }
}

export const getMajorsByUni = async (uniID: string): Promise<Array<Major>> => {
    /// Fetch all the majors of a specific university by its id
    try {
        const response = await axios.get<Array<Major>>(url + `/universities/${uniID}/majors`)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to fetch the majors by the specific university id. Server error: ${error?.response?.data.error}`)
        }
        throw new Error(`Failed to fetch the majors by the specific university id`)
    }
}