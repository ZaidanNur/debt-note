import { apiClient } from '@/lib/api-client';

export type Transaction = {
    id: string;
    name: string;
    amount: number;
    date: string;
};

export type DashboardData = {
    summary: {
        totalOwe: number;
        totalOwed: number;
    };
    oweList: Transaction[];
    owedList: Transaction[];
};

export const dashboardApi = {
    getDashboardData: async (): Promise<DashboardData> => {
        return apiClient.get('/dashboard');
    },
};
