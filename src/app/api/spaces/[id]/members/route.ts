import { NextResponse } from 'next/server';
import { spacesStore } from '@/lib/db-mock';

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();

    const space = spacesStore.find((s) => s.id === id);
    if (!space) {
        return NextResponse.json({ message: 'Space not found' }, { status: 404 });
    }

    const newMember = {
        id: body.id || Math.random().toString(36).substr(2, 9),
        name: body.name
    };

    space.members.push(newMember);

    return NextResponse.json(newMember, { status: 201 });
}
