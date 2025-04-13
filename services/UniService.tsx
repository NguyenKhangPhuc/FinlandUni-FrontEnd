import axios from "axios"
import { University } from "../types/universities";

const url: string = 'http://localhost:3005/api'


export const getUniversities = async (): Promise<Array<University>> => {
    const response = await axios.get<Array<University>>(url + '/universities');
    return response.data;
}

