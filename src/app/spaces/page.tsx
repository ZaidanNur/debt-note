'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { spacesApi, type Space } from '@/features/spaces/api/spaces';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SpacesPage() {
    const queryClient = useQueryClient();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSpaceName, setNewSpaceName] = useState('');

    const { data: spaces, isLoading } = useQuery({
        queryKey: ['spaces'],
        queryFn: spacesApi.getAllSpaces,
    });

    const createMutation = useMutation({
        mutationFn: spacesApi.createSpace,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['spaces'] });
            setIsModalOpen(false);
            setNewSpaceName('');
        }
    });

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        if (newSpaceName.trim()) {
            createMutation.mutate(newSpaceName);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <Link href="/dashboard" className="text-gray-500 hover:text-indigo-600 text-sm mb-2 inline-block">← Kembali ke Dashboard</Link>
                        <h1 className="text-3xl font-bold text-gray-900">Utang Spaces</h1>
                        <p className="text-gray-500 mt-2">Kelola grup dan catatan hutangmu disini.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition shadow-lg flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Buat Space Baru
                    </button>
                </div>

                {/* Create Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
                            <h2 className="text-2xl font-bold mb-6 text-indigo-600">Buat Space Baru</h2>
                            <form onSubmit={handleCreate}>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Space</label>
                                    <input
                                        type="text"
                                        value={newSpaceName}
                                        onChange={(e) => setNewSpaceName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                                        placeholder="Contoh: Liburan Bali"
                                        autoFocus
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={createMutation.isPending}
                                        className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                                    >
                                        {createMutation.isPending ? 'Membuat...' : 'Buat Space'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-2xl"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spaces?.map((space) => (
                            <Link href={`/spaces/${space.id}`} key={space.id} className="group">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-indigo-50 rounded-xl">
                                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                                            {space.members?.length || 0} Anggota
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{space.name}</h3>
                                    <p className="text-gray-500 text-sm mb-6 flex-grow">
                                        Dibuat pada {new Date(space.createdAt).toLocaleDateString("id-ID")}
                                    </p>
                                    <div className="flex items-center text-indigo-600 font-medium text-sm">
                                        Kelola Space
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* Empty State */}
                        {spaces?.length === 0 && (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada Space</h3>
                                <p className="text-gray-500">Buat space baru untuk mulai mencatat hutang bersama teman.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
