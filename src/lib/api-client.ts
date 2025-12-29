import axios from 'axios';

// Create Axios Instance
export const apiClient = axios.create({
    baseURL: '/api', // Memanggil Internal API Route Next.js (Mock)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor untuk handle response
apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        return Promise.reject(new Error(message));
    }
);
