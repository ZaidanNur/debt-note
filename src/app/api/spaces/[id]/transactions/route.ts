import { NextResponse } from 'next/server';
import { spacesStore } from '@/lib/db-mock';

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();

    const space = spacesStore.find((s) => s.id === id);
    if (!space) {
        return NextResponse.json({ message: 'Space not found' }, { status: 404 });
    }

    const newTx = {
        id: 't_' + Math.random().toString(36).substr(2, 5),
        ...body,
        date: new Date().toISOString().split('T')[0]
    };

    space.transactions.push(newTx);

    return NextResponse.json(newTx, { status: 201 });
}
