import { NextResponse } from 'next/server';
import { spacesStore, CURRENT_USER_ID } from '@/lib/db-mock';

export const dynamic = 'force-dynamic';

export async function GET() {
    // Demo User Context: Assume logged-in user is "Andi" (id: 'm1')
    // In a real app, this comes from session/token
    const currentUserId = CURRENT_USER_ID;

    let totalOwe = 0;
    let totalOwed = 0;
    const oweList: any[] = [];
    const owedList: any[] = [];

    spacesStore.forEach(space => {
        space.transactions.forEach(tx => {
            // Case 1: I owe someone (I am fromId)
            if (tx.fromId === currentUserId) {
                totalOwe += tx.amount;
                // Find who I owe
                const targetMember = space.members.find(m => m.id === tx.toId);
                if (targetMember) {
                    oweList.push({
                        id: tx.id,
                        name: targetMember.name, // The person I owe
                        amount: tx.amount,
                        date: tx.date,
                        spaceName: space.name // Optional context
                    });
                }
            }

            // Case 2: Someone owes me (I am toId)
            if (tx.toId === currentUserId) {
                totalOwed += tx.amount;
                // Find who owes me
                const targetMember = space.members.find(m => m.id === tx.fromId);
                if (targetMember) {
                    owedList.push({
                        id: tx.id,
                        name: targetMember.name, // The person who owes me
                        amount: tx.amount,
                        date: tx.date,
                        spaceName: space.name
                    });
                }
            }
        });
    });

    // Sort by amount descending (Largest first)
    oweList.sort((a, b) => b.amount - a.amount);
    owedList.sort((a, b) => b.amount - a.amount);

    return NextResponse.json({
        summary: {
            totalOwe,
            totalOwed,
        },
        oweList,
        owedList
    });
}
