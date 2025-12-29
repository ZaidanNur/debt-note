'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { spacesApi, type Space, type SpaceMember } from '@/features/spaces/api/spaces';
import { useState, use } from 'react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Currency Formatter
const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

export default function SpaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState<'members' | 'transactions' | 'recap'>('members');

    // Modals state
    const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
    const [isTxModalOpen, setIsTxModalOpen] = useState(false);

    // Form states
    const [newMemberName, setNewMemberName] = useState('');
    const [isMe, setIsMe] = useState(false);


    const [txForm, setTxForm] = useState({
        fromId: '',
        toId: '',
        amount: '',
        note: ''
    });

    const { data: space, isLoading } = useQuery({
        queryKey: ['space', id],
        queryFn: () => spacesApi.getSpaceById(id),
    });

    // Check if current user is already member
    // In real app, get from session. Here use 'm1'
    const CURRENT_USER_ID = 'm1';
    const isCurrentUserMember = space?.members.some(m => m.id === CURRENT_USER_ID);

    // Mutations
    const addMemberMutation = useMutation({
        mutationFn: ({ name, memberId }: { name: string, memberId?: string }) => spacesApi.addMember(id, name, memberId),
        onSuccess: (newMember) => {
            // Optimistic update simpler for demo: invalidate
            // Or manual caching update to push member
            queryClient.setQueryData(['space', id], (old: Space) => ({
                ...old,
                members: [...old.members, newMember]
            }));
            setIsMemberModalOpen(false);
            setNewMemberName('');
            setIsMe(false);
        }
    });

    const addTxMutation = useMutation({
        mutationFn: (data: any) => spacesApi.addTransaction(id, { ...data, amount: Number(data.amount) }),
        onSuccess: (newTx) => {
            queryClient.invalidateQueries({ queryKey: ['dashboard'] });
            queryClient.setQueryData(['space', id], (old: Space) => ({
                ...old,
                transactions: [...old.transactions, newTx]
            }));
            setIsTxModalOpen(false);
            setTxForm({ fromId: '', toId: '', amount: '', note: '' });
        }
    });

    const handleAddMember = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMemberName.trim()) {
            addMemberMutation.mutate({
                name: newMemberName,
                memberId: isMe ? CURRENT_USER_ID : undefined
            });
        }
    };

    const handleAddTx = (e: React.FormEvent) => {
        e.preventDefault();
        if (txForm.fromId && txForm.toId && txForm.amount) {
            addTxMutation.mutate(txForm);
        }
    };

    if (isLoading) return <div className="p-10 text-center">Loading Data Space...</div>;
    if (!space) return <div className="p-10 text-center">Space Not Found</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Link href="/spaces" className="text-gray-500 hover:text-indigo-600 text-sm mb-2 inline-block">← Kembali ke List Space</Link>
                    <h1 className="text-3xl font-bold text-gray-900">{space.name}</h1>
                    <p className="text-gray-500">Dibuat pada {space.createdAt}</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-8">
                    <button
                        onClick={() => setActiveTab('members')}
                        className={cn(
                            "px-6 py-3 font-medium text-sm transition-all border-b-2",
                            activeTab === 'members'
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        )}
                    >
                        Anggota ({space.members.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('transactions')}
                        className={cn(
                            "px-6 py-3 font-medium text-sm transition-all border-b-2",
                            activeTab === 'transactions'
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        )}
                    >
                        Transaksi ({space.transactions.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('recap')}
                        className={cn(
                            "px-6 py-3 font-medium text-sm transition-all border-b-2",
                            activeTab === 'recap'
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        )}
                    >
                        Rekapitulasi
                    </button>
                </div>

                {/* Tab Content: Members */}
                {activeTab === 'members' && (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100">
                                <h2 className="font-bold text-gray-900">Daftar Anggota</h2>
                                <button
                                    onClick={() => setIsMemberModalOpen(true)}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                                >
                                    + Tambah Anggota
                                </button>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {space.members.length === 0 ? (
                                    <p className="p-8 text-center text-gray-500">Belum ada anggota.</p>
                                ) : (
                                    space.members.map((member) => (
                                        <div key={member.id} className="p-5 flex items-center gap-4 hover:bg-gray-50">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                                                {member.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{member.name}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content: Transactions */}
                {activeTab === 'transactions' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100">
                                <h2 className="font-bold text-gray-900">Riwayat Transaksi</h2>
                                <button
                                    onClick={() => setIsTxModalOpen(true)}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                                >
                                    + Catat Hutang
                                </button>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {space.transactions.length === 0 ? (
                                    <p className="p-8 text-center text-gray-500">Belum ada transaksi.</p>
                                ) : (
                                    space.transactions.map((tx) => {
                                        const fromName = space.members.find(m => m.id === tx.fromId)?.name || 'Unknown';
                                        const toName = space.members.find(m => m.id === tx.toId)?.name || 'Unknown';
                                        return (
                                            <div key={tx.id} className="p-5 flex flex-col sm:flex-row justify-between sm:items-center hover:bg-gray-50 gap-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-bold text-gray-900">{fromName}</span>
                                                        <span className="text-gray-400 text-xs">berhutang ke</span>
                                                        <span className="font-bold text-gray-900">{toName}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500">{tx.note || 'Tanpa catatan'}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-red-600">{formatIDR(tx.amount)}</p>
                                                    <p className="text-xs text-gray-400">{tx.date}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content: Recap */}
                {activeTab === 'recap' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-teal-50/30 border-b border-gray-100">
                                <h2 className="font-bold text-gray-900">Rekapitulasi Hutang Bersih</h2>
                                <p className="text-sm text-gray-500">Perhitungan otomatis sisa hutang antar anggota.</p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {(() => {
                                    // Calculation Logic
                                    const balances: Record<string, number> = {};
                                    // Initialize map for pairs "id1-id2"
                                    const pairDebts: Record<string, number> = {};

                                    space.transactions.forEach(tx => {
                                        // Ensure canonical order for keys to handle A->B and B->A in same bucket
                                        // But easier: track net flow from A to B.
                                        // If A -> B 50000, then debt[A][B] += 50000
                                        const pairKey = [tx.fromId, tx.toId].sort().join('-');
                                        const isNormalOrder = pairKey === `${tx.fromId}-${tx.toId}`;

                                        // Logic: Store net balance relative to Sorted Pair
                                        // If pair is A-B (A < B):
                                        // A->B adds to balance
                                        // B->A subtracts from balance
                                        if (!pairDebts[pairKey]) pairDebts[pairKey] = 0;

                                        if (isNormalOrder) {
                                            pairDebts[pairKey] += tx.amount;
                                        } else {
                                            pairDebts[pairKey] -= tx.amount;
                                        }
                                    });

                                    const summary = Object.entries(pairDebts).map(([key, amount]) => {
                                        if (amount === 0) return null;
                                        const [id1, id2] = key.split('-');
                                        const member1 = space.members.find(m => m.id === id1);
                                        const member2 = space.members.find(m => m.id === id2);

                                        if (!member1 || !member2) return null;

                                        // If amount > 0: id1 owes id2 (Normal Order flow was positive)
                                        // If amount < 0: id2 owes id1 (Reverse Order flow was stronger)
                                        const debtor = amount > 0 ? member1 : member2;
                                        const creditor = amount > 0 ? member2 : member1;
                                        const finalAmount = Math.abs(amount);

                                        return { debtor, creditor, amount: finalAmount };
                                    }).filter(Boolean);

                                    if (summary.length === 0) {
                                        return <p className="p-8 text-center text-gray-500">Tidak ada hutang yang perlu dibayar (Lunas/Kosong).</p>;
                                    }

                                    return summary.map((item, idx) => (
                                        <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                                                    {item?.debtor.name}
                                                </div>
                                                <span className="text-gray-400 text-sm">perlu membayar ke</span>
                                                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                                                    {item?.creditor.name}
                                                </div>
                                            </div>
                                            <span className="font-bold text-gray-900 text-lg">{formatIDR(item?.amount || 0)}</span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal: Add Member */}
                {isMemberModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
                            <h3 className="text-xl font-bold mb-4 text-indigo-600">Tambah Anggota</h3>
                            <form onSubmit={handleAddMember}>
                                <input
                                    className="w-full border p-2 rounded mb-4 focus:ring-2 ring-indigo-500 outline-none text-gray-900"
                                    placeholder="Nama Anggota"
                                    value={newMemberName}
                                    onChange={e => setNewMemberName(e.target.value)}
                                    autoFocus
                                />
                                {!isCurrentUserMember && (
                                    <div className="flex items-center gap-2 mb-6">
                                        <input
                                            type="checkbox"
                                            id="isMe"
                                            checked={isMe}
                                            onChange={(e) => setIsMe(e.target.checked)}
                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="isMe" className="text-sm text-gray-700 select-none cursor-pointer">
                                            Ini Saya (Gunakan Profil Saya)
                                        </label>
                                    </div>
                                )}
                                <div className="flex justify-end gap-2">
                                    <button type="button" onClick={() => setIsMemberModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Batal</button>
                                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modal: Add Transaction */}
                {isTxModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
                            <h3 className="text-xl font-bold mb-4 text-indigo-600">Catat Hutang Baru</h3>
                            <form onSubmit={handleAddTx} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Siapa yang berhutang? (Dari)</label>
                                    <select
                                        className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                                        value={txForm.fromId}
                                        onChange={e => setTxForm({ ...txForm, fromId: e.target.value })}
                                        required
                                    >
                                        <option value="">Pilih Anggota</option>
                                        {space.members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Berhutang kepada? (Ke)</label>
                                    <select
                                        className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                                        value={txForm.toId}
                                        onChange={e => setTxForm({ ...txForm, toId: e.target.value })}
                                        required
                                    >
                                        <option value="">Pilih Anggota</option>
                                        {space.members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah (Rp)</label>
                                    <input
                                        type="number"
                                        className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                                        value={txForm.amount}
                                        onChange={e => setTxForm({ ...txForm, amount: e.target.value })}
                                        placeholder="0"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
                                    <input
                                        type="text"
                                        className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                                        value={txForm.note}
                                        onChange={e => setTxForm({ ...txForm, note: e.target.value })}
                                        placeholder="Contoh: Makan Siang"
                                    />
                                </div>

                                <div className="flex justify-end gap-2 mt-6">
                                    <button type="button" onClick={() => setIsTxModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Batal</button>
                                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Simpan Transaksi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
