// Shared In-Memory Database for Mocking
// In a real app, this would be a database connection.

export type MockMember = {
    id: string;
    name: string;
};

export type MockTransaction = {
    id: string;
    fromId: string;
    toId: string;
    amount: number;
    note: string;
    date: string;
};

export type MockSpace = {
    id: string;
    name: string;
    createdAt: string;
    members: MockMember[];
    transactions: MockTransaction[];
};

export const CURRENT_USER_ID = 'm1';

// Use globalThis to persist store across Hot Reliefs in Dev
const globalForStore = globalThis as unknown as { spacesStore: MockSpace[] };

const initialSpaces: MockSpace[] = [
    {
        id: '1',
        name: 'Trip ke Bali',
        createdAt: '2023-12-01',
        members: [
            { id: 'm1', name: 'Andi' },
            { id: 'm2', name: 'Budi' },
            { id: 'm3', name: 'Citra' },
        ],
        transactions: [
            { id: 't1', fromId: 'm1', toId: 'm2', amount: 50000, note: 'Beli Kopi', date: '2023-12-01' },
        ]
    },
    {
        id: '2',
        name: 'Makan Siang Kantor',
        createdAt: '2023-12-10',
        members: [
            { id: 'm4', name: 'Dewi' },
            { id: 'm5', name: 'Eko' }
        ],
        transactions: []
    }
];

export const spacesStore = globalForStore.spacesStore || initialSpaces;

if (process.env.NODE_ENV !== 'production') globalForStore.spacesStore = spacesStore;
