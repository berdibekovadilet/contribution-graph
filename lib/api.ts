import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dpg.gg/',
});

export const getContributions = async () => {
    try {
        const response = await api.get('test/calendar.json');
        return response.data;
    } catch (error) {
        throw error;
    }
};
