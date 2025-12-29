'use client';

import { useQuery } from '@tanstack/react-query';
import { dashboardApi, type DashboardData } from '@/features/dashboard/api/dashboard';
import { spacesApi } from '@/features/spaces/api/spaces';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Simple Skeleton Component
const Skeleton = ({ className }: { className: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);

// Currency Formatter
const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

export default function DashboardPage() {
    const { data: dashboardData, isLoading: isDashboardLoading, isError, error } = useQuery<DashboardData>({
        queryKey: ['dashboard'],
        queryFn: dashboardApi.getDashboardData,
    });

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const router = useRouter();

    const { data: spaces, isLoading: isSpacesLoading } = useQuery({
        queryKey: ['spaces'],
        queryFn: spacesApi.getAllSpaces,
    });

    if (isDashboardLoading || isSpacesLoading) {
        return (
            <div className="min-h-screen bg-gray-50 p-6 md:p-10">
                <div className="max-w-7xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Skeleton className="h-40 w-full rounded-2xl" />
                        <Skeleton className="h-40 w-full rounded-2xl" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        <Skeleton className="h-60 w-full rounded-2xl" />
                        <Skeleton className="h-60 w-full rounded-2xl" />
                    </div>
                </div>
            </div>
        );
    }



    const handleLogout = () => {
        // In real app: call logout API
        router.push('/');
    };

    if (isError) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-red-600 text-xl font-bold mb-2">Error</h2>
                    <p className="text-gray-600">{(error as Error).message || 'Gagal memuat data'}</p>
                </div>
            </div>
        );
    }

    const oweList = dashboardData?.oweList?.slice(0, 8) || [];
    const owedList = dashboardData?.owedList?.slice(0, 8) || [];

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <button
                        onClick={() => setIsLogoutModalOpen(true)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center gap-1 transition"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>

                {/* Logout Confirmation Modal */}
                {isLogoutModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Konfirmasi Logout</h3>
                            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin keluar dari aplikasi?</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsLogoutModalOpen(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
                                >
                                    Ya, Logout
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Summary Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Card: Hutang Saya */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Total Hutang Kamu</p>
                            <p className="text-sm text-gray-400">Uang yang harus kamu bayar</p>
                        </div>
                        <div className="mt-4">
                            <span className="text-4xl font-bold text-red-600">{formatIDR(dashboardData?.summary.totalOwe || 0)}</span>
                        </div>
                    </div>

                    {/* Card: Piutang Saya */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Total Piutang Kamu</p>
                            <p className="text-sm text-gray-400">Uang teman yang ada di kamu</p>
                        </div>
                        <div className="mt-4">
                            <span className="text-4xl font-bold text-green-600">{formatIDR(dashboardData?.summary.totalOwed || 0)}</span>
                        </div>
                    </div>
                </div>

                {/* Lists Section */}
                <div className="grid lg:grid-cols-2 gap-10 mb-16">

                    {/* List: Siapa yang saya hutangi */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-100 bg-red-50/30">
                            <h2 className="text-lg font-bold text-gray-900">Kamu Berhutang Kepada</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {oweList.length === 0 ? (
                                <p className="p-6 text-gray-500 text-center">Tidak ada data.</p>
                            ) : (
                                oweList.map((item) => (
                                    <div key={item.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                                                {item.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-red-600">{formatIDR(item.amount)}</span>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>

                    {/* List: Siapa yang berhutang ke saya */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-100 bg-green-50/30">
                            <h2 className="text-lg font-bold text-gray-900">Berhutang Kepadamu</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {owedList.length === 0 ? (
                                <p className="p-6 text-gray-500 text-center">Tidak ada data.</p>
                            ) : (
                                owedList.map((item) => (
                                    <div key={item.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                                                {item.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-green-600">{formatIDR(item.amount)}</span>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>

                {/* Spaces Section */}
                <div className="mt-12 border-t border-gray-200 pt-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Utang Spaces Anda</h2>
                        <Link href="/spaces" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition shadow-md flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Buat Space Baru
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Provide visual access to spaces right from dashboard */}
                        {spaces?.map((space) => (
                            <Link href={`/spaces/${space.id}`} key={space.id} className="group">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                            {space.members?.length || 0} Anggota
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">{space.name}</h3>
                                    <p className="text-sm text-gray-400 mt-2">Dibuat: {new Date(space.createdAt).toLocaleDateString()}</p>
                                </div>
                            </Link>
                        ))}

                        {/* View All Spaces Link Card if needed, or if empty */}
                        {spaces?.length === 0 && (
                            <div className="col-span-full text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">Belum ada space. Buat sekarang!</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
