module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/debt-note/src/lib/db-mock.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared In-Memory Database for Mocking
// In a real app, this would be a database connection.
__turbopack_context__.s([
    "CURRENT_USER_ID",
    ()=>CURRENT_USER_ID,
    "spacesStore",
    ()=>spacesStore
]);
const CURRENT_USER_ID = 'm1';
// Use globalThis to persist store across Hot Reliefs in Dev
const globalForStore = globalThis;
const initialSpaces = [
    {
        id: '1',
        name: 'Trip ke Bali',
        createdAt: '2023-12-01',
        members: [
            {
                id: 'm1',
                name: 'Andi'
            },
            {
                id: 'm2',
                name: 'Budi'
            },
            {
                id: 'm3',
                name: 'Citra'
            }
        ],
        transactions: [
            {
                id: 't1',
                fromId: 'm1',
                toId: 'm2',
                amount: 50000,
                note: 'Beli Kopi',
                date: '2023-12-01'
            }
        ]
    },
    {
        id: '2',
        name: 'Makan Siang Kantor',
        createdAt: '2023-12-10',
        members: [
            {
                id: 'm4',
                name: 'Dewi'
            },
            {
                id: 'm5',
                name: 'Eko'
            }
        ],
        transactions: []
    }
];
const spacesStore = globalForStore.spacesStore || initialSpaces;
if ("TURBOPACK compile-time truthy", 1) globalForStore.spacesStore = spacesStore;
}),
"[project]/debt-note/src/app/api/dashboard/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$db$2d$mock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/db-mock.ts [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
async function GET() {
    // Demo User Context: Assume logged-in user is "Andi" (id: 'm1')
    // In a real app, this comes from session/token
    const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$db$2d$mock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURRENT_USER_ID"];
    let totalOwe = 0;
    let totalOwed = 0;
    const oweList = [];
    const owedList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$db$2d$mock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["spacesStore"].forEach((space)=>{
        space.transactions.forEach((tx)=>{
            // Case 1: I owe someone (I am fromId)
            if (tx.fromId === currentUserId) {
                totalOwe += tx.amount;
                // Find who I owe
                const targetMember = space.members.find((m)=>m.id === tx.toId);
                if (targetMember) {
                    oweList.push({
                        id: tx.id,
                        name: targetMember.name,
                        amount: tx.amount,
                        date: tx.date,
                        spaceName: space.name // Optional context
                    });
                }
            }
            // Case 2: Someone owes me (I am toId)
            if (tx.toId === currentUserId) {
                totalOwed += tx.amount;
                // Find who owes me
                const targetMember = space.members.find((m)=>m.id === tx.fromId);
                if (targetMember) {
                    owedList.push({
                        id: tx.id,
                        name: targetMember.name,
                        amount: tx.amount,
                        date: tx.date,
                        spaceName: space.name
                    });
                }
            }
        });
    });
    // Sort by amount descending (Largest first)
    oweList.sort((a, b)=>b.amount - a.amount);
    owedList.sort((a, b)=>b.amount - a.amount);
    return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        summary: {
            totalOwe,
            totalOwed
        },
        oweList,
        owedList
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4bed0505._.js.map