import { NextResponse } from 'next/server';
import { spacesStore } from '@/lib/db-mock';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(spacesStore);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newSpace = {
        id: Math.random().toString(36).substr(2, 9),
        name: body.name,
        createdAt: new Date().toISOString(),
        members: [],
        transactions: []
    };
    spacesStore.push(newSpace);
    return NextResponse.json(newSpace, { status: 201 });
}
