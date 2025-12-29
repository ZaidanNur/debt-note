import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Mock Register - selalu sukses
    return NextResponse.json(
        { message: 'Registration successful' },
        { status: 201 }
    );
}
