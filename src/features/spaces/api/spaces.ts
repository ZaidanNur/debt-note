import { apiClient } from '@/lib/api-client';

export type SpaceMember = {
    id: string;
    name: string;
};

export type SpaceTransaction = {
    id: string;
    fromId: string; // Member ID
    toId: string;   // Member ID
    amount: number;
    note: string;
    date: string;
};

export type Space = {
    id: string;
    name: string;
    createdAt: string;
    members: SpaceMember[];
    transactions: SpaceTransaction[];
};

export const spacesApi = {
    getAllSpaces: async (): Promise<Space[]> => {
        return apiClient.get('/spaces');
    },

    getSpaceById: async (id: string): Promise<Space> => {
        return apiClient.get(`/spaces/${id}`);
    },

    createSpace: async (name: string): Promise<Space> => {
        return apiClient.post('/spaces', { name });
    },

    addMember: async (spaceId: string, name: string, id?: string): Promise<SpaceMember> => {
        return apiClient.post(`/spaces/${spaceId}/members`, { name, id });
    },

    addTransaction: async (spaceId: string, data: Omit<SpaceTransaction, 'id' | 'date'>): Promise<SpaceTransaction> => {
        return apiClient.post(`/spaces/${spaceId}/transactions`, data);
    }
};
