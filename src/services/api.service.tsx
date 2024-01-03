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
    }
}