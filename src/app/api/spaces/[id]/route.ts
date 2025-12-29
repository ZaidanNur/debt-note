import { NextResponse } from 'next/server';
import { spacesStore } from '@/lib/db-mock';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const space = spacesStore.find((s) => s.id === id);

    if (!space) {
        return NextResponse.json({ message: 'Space not found' }, { status: 404 });
    }

    return NextResponse.json(space);
}
