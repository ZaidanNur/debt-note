'use client';

import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/features/auth/api/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SimpleCaptcha } from '@/components/simple-captcha';

const schema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
});

type LoginForm = z.infer<typeof schema>;

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const loginMutation = useMutation({
        mutationFn: authApi.login,
        onSuccess: () => {
            // In a real app, global state for user would be updated here
            router.push('/dashboard');
        },
        onError: (err: Error) => {
            setError(err.message || 'Login gagal');
        }
    });

    const onSubmit = (data: LoginForm) => {
        if (!isCaptchaValid) {
            setError('Silakan selesaikan CAPTCHA terlebih dahulu.');
            return;
        }
        setError('');
        loginMutation.mutate(data);
    };

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Masuk ke UtangHub</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Belum punya akun?{' '}
                    <Link href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Daftar disini
                    </Link>
                </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-black rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="user@example.com (Mock)"
                            {...register('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-black rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="password"
                            {...register('password')}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="pt-2">
                        <SimpleCaptcha onValidate={setIsCaptchaValid} />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loginMutation.isPending || !isCaptchaValid}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {loginMutation.isPending ? 'Memproses...' : 'Masuk'}
                    </button>
                </div>

                <div className="text-center text-xs text-gray-400 mt-4">
                    Gunakan <b>user@example.com</b> & <b>password</b> untuk demo.
                </div>
            </form>
        </div>
    );
}
