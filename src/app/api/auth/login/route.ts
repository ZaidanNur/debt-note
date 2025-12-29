import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Mock Login Logic
        if (email === 'user@example.com' && password === 'password') {
            // Create a Mock Response
            const response = NextResponse.json(
                {
                    user: {
                        id: '1',
                        name: 'John Doe',
                        email: email,
                    },
                    token: 'mock-jwt-token-xyz',
                },
                { status: 200 }
            );

            // Set Mock Cookie
            response.cookies.set('token', 'mock-jwt-token-xyz', {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24, // 1 day
            });

            return response;
        }

        return NextResponse.json(
            { message: 'Invalid email or password' },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'An error occurred' },
            { status: 500 }
        );
    }
}
