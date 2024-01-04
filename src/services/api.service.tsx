import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:3004';

export const ApiService = {
    listAll: async (): Promise<AxiosResponse<{ result: []}>> => {
        const endpoint = `/result`;
        const url = `${API_BASE_URL}${endpoint}`;

        try {
            const response = await axios.get<{result: []}>(url);
            return response;
        } catch (error) {
            throw error;
        };
    },

    deleteGrade: async (id: number): Promise<AxiosResponse<void>> => {
        const endpoint = `/result`;
        const url = `${API_BASE_URL}${endpoint}/${id}`;

        try {
            const response = await axios.delete<void>(url);
            return response;
        } catch (error) {
            throw error;
        };
    },

    addGrade: async (newGrade: 
        { 
            bimestre: string, 
            disciplina: string, 
            nota: number, 
            criadoEm: string,
            atualizadoEm: string
        }): Promise<AxiosResponse<{ result: any }>> => {
            
        const endpoint = `/result`;
        const url = `${API_BASE_URL}${endpoint}`;

        try {
            const response = await axios.post<{ result: any }>(url, newGrade);
            return response;
        } catch (error) {
            throw error;
        }
    },
}