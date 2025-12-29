import { apiClient } from '@/lib/api-client';
import { z } from 'zod';

// Define Schemas
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export type AuthResponse = {
    user: {
        id: string;
        name: string;
        email: string;
    };
    token: string;
};

// API Services
export const authApi = {
    login: async (data: LoginInput): Promise<AuthResponse> => {
        return apiClient.post('/auth/login', data);
    },

    register: async (data: RegisterInput): Promise<{ message: string }> => {
        return apiClient.post('/auth/register', data);
    },

    logout: async () => {
        // Call logout endpoint if exists, or/and clear local state
        // For mock, we simply return
        return true;
    }
};
