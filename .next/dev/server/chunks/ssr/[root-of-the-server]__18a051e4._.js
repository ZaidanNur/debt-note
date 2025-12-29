module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/debt-note/src/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Interceptor untuk handle response
apiClient.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
});
}),
"[project]/debt-note/src/features/spaces/api/spaces.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacesApi",
    ()=>spacesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/api-client.ts [app-ssr] (ecmascript)");
;
const spacesApi = {
    getAllSpaces: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/spaces');
    },
    getSpaceById: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/spaces/${id}`);
    },
    createSpace: async (name)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/spaces', {
            name
        });
    },
    addMember: async (spaceId, name, id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/spaces/${spaceId}/members`, {
            name,
            id
        });
    },
    addTransaction: async (spaceId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/spaces/${spaceId}/transactions`, data);
    }
};
}),
"[project]/debt-note/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/debt-note/src/app/spaces/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpaceDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/features/spaces/api/spaces.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Currency Formatter
const formatIDR = (amount)=>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
};
function SpaceDetailPage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('members');
    // Modals state
    const [isMemberModalOpen, setIsMemberModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTxModalOpen, setIsTxModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states
    const [newMemberName, setNewMemberName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isMe, setIsMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [txForm, setTxForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fromId: '',
        toId: '',
        amount: '',
        note: ''
    });
    const { data: space, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'space',
            id
        ],
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacesApi"].getSpaceById(id)
    });
    // Check if current user is already member
    // In real app, get from session. Here use 'm1'
    const CURRENT_USER_ID = 'm1';
    const isCurrentUserMember = space?.members.some((m)=>m.id === CURRENT_USER_ID);
    // Mutations
    const addMemberMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ name, memberId })=>__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacesApi"].addMember(id, name, memberId),
        onSuccess: (newMember)=>{
            // Optimistic update simpler for demo: invalidate
            // Or manual caching update to push member
            queryClient.setQueryData([
                'space',
                id
            ], (old)=>({
                    ...old,
                    members: [
                        ...old.members,
                        newMember
                    ]
                }));
            setIsMemberModalOpen(false);
            setNewMemberName('');
            setIsMe(false);
        }
    });
    const addTxMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacesApi"].addTransaction(id, {
                ...data,
                amount: Number(data.amount)
            }),
        onSuccess: (newTx)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'dashboard'
                ]
            });
            queryClient.setQueryData([
                'space',
                id
            ], (old)=>({
                    ...old,
                    transactions: [
                        ...old.transactions,
                        newTx
                    ]
                }));
            setIsTxModalOpen(false);
            setTxForm({
                fromId: '',
                toId: '',
                amount: '',
                note: ''
            });
        }
    });
    const handleAddMember = (e)=>{
        e.preventDefault();
        if (newMemberName.trim()) {
            addMemberMutation.mutate({
                name: newMemberName,
                memberId: isMe ? CURRENT_USER_ID : undefined
            });
        }
    };
    const handleAddTx = (e)=>{
        e.preventDefault();
        if (txForm.fromId && txForm.toId && txForm.amount) {
            addTxMutation.mutate(txForm);
        }
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center",
        children: "Loading Data Space..."
    }, void 0, false, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 96,
        columnNumber: 27
    }, this);
    if (!space) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center",
        children: "Space Not Found"
    }, void 0, false, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 97,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-6 md:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/spaces",
                            className: "text-gray-500 hover:text-indigo-600 text-sm mb-2 inline-block",
                            children: "← Kembali ke List Space"
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900",
                            children: space.name
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: [
                                "Dibuat pada ",
                                space.createdAt
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-gray-200 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('members'),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", activeTab === 'members' ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: [
                                "Anggota (",
                                space.members.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('transactions'),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", activeTab === 'transactions' ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: [
                                "Transaksi (",
                                space.transactions.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('recap'),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", activeTab === 'recap' ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: "Rekapitulasi"
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                }, this),
                activeTab === 'members' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-left-4 duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-gray-900",
                                        children: "Daftar Anggota"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMemberModalOpen(true),
                                        className: "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition",
                                        children: "+ Tambah Anggota"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: space.members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p-8 text-center text-gray-500",
                                    children: "Belum ada anggota."
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 37
                                }, this) : space.members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex items-center gap-4 hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold",
                                                children: member.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-900",
                                                children: member.name
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, member.id, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 158,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 148,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 147,
                    columnNumber: 21
                }, this),
                activeTab === 'transactions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-right-4 duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-gray-900",
                                        children: "Riwayat Transaksi"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsTxModalOpen(true),
                                        className: "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition",
                                        children: "+ Catat Hutang"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 180,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: space.transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p-8 text-center text-gray-500",
                                    children: "Belum ada transaksi."
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 37
                                }, this) : space.transactions.map((tx)=>{
                                    const fromName = space.members.find((m)=>m.id === tx.fromId)?.name || 'Unknown';
                                    const toName = space.members.find((m)=>m.id === tx.toId)?.name || 'Unknown';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex flex-col sm:flex-row justify-between sm:items-center hover:bg-gray-50 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-gray-900",
                                                                children: fromName
                                                            }, void 0, false, {
                                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400 text-xs",
                                                                children: "berhutang ke"
                                                            }, void 0, false, {
                                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-gray-900",
                                                                children: toName
                                                            }, void 0, false, {
                                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: tx.note || 'Tanpa catatan'
                                                    }, void 0, false, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-red-600",
                                                        children: formatIDR(tx.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400",
                                                        children: tx.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, tx.id, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 189,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 179,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this),
                activeTab === 'recap' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-right-4 duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-teal-50/30 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-gray-900",
                                        children: "Rekapitulasi Hutang Bersih"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Perhitungan otomatis sisa hutang antar anggota."
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 223,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: (()=>{
                                    // Calculation Logic
                                    const balances = {};
                                    // Initialize map for pairs "id1-id2"
                                    const pairDebts = {};
                                    space.transactions.forEach((tx)=>{
                                        // Ensure canonical order for keys to handle A->B and B->A in same bucket
                                        // But easier: track net flow from A to B.
                                        // If A -> B 50000, then debt[A][B] += 50000
                                        const pairKey = [
                                            tx.fromId,
                                            tx.toId
                                        ].sort().join('-');
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
                                    const summary = Object.entries(pairDebts).map(([key, amount])=>{
                                        if (amount === 0) return null;
                                        const [id1, id2] = key.split('-');
                                        const member1 = space.members.find((m)=>m.id === id1);
                                        const member2 = space.members.find((m)=>m.id === id2);
                                        if (!member1 || !member2) return null;
                                        // If amount > 0: id1 owes id2 (Normal Order flow was positive)
                                        // If amount < 0: id2 owes id1 (Reverse Order flow was stronger)
                                        const debtor = amount > 0 ? member1 : member2;
                                        const creditor = amount > 0 ? member2 : member1;
                                        const finalAmount = Math.abs(amount);
                                        return {
                                            debtor,
                                            creditor,
                                            amount: finalAmount
                                        };
                                    }).filter(Boolean);
                                    if (summary.length === 0) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-8 text-center text-gray-500",
                                            children: "Tidak ada hutang yang perlu dibayar (Lunas/Kosong)."
                                        }, void 0, false, {
                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 48
                                        }, this);
                                    }
                                    return summary.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 flex items-center justify-between hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-bold",
                                                            children: item?.debtor.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm",
                                                            children: "perlu membayar ke"
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold",
                                                            children: item?.creditor.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-gray-900 text-lg",
                                                    children: formatIDR(item?.amount || 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 41
                                        }, this));
                                })()
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 221,
                    columnNumber: 21
                }, this),
                isMemberModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4 text-indigo-600",
                                children: "Tambah Anggota"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 299,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddMember,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full border p-2 rounded mb-4 focus:ring-2 ring-indigo-500 outline-none text-gray-900",
                                        placeholder: "Nama Anggota",
                                        value: newMemberName,
                                        onChange: (e)=>setNewMemberName(e.target.value),
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 33
                                    }, this),
                                    !isCurrentUserMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "isMe",
                                                checked: isMe,
                                                onChange: (e)=>setIsMe(e.target.checked),
                                                className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "isMe",
                                                className: "text-sm text-gray-700 select-none cursor-pointer",
                                                children: "Ini Saya (Gunakan Profil Saya)"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsMemberModalOpen(false),
                                                className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                                                children: "Batal"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                                                children: "Simpan"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 300,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 298,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 297,
                    columnNumber: 21
                }, this),
                isTxModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4 text-indigo-600",
                                children: "Catat Hutang Baru"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 335,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddTx,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Siapa yang berhutang? (Dari)"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                                value: txForm.fromId,
                                                onChange: (e)=>setTxForm({
                                                        ...txForm,
                                                        fromId: e.target.value
                                                    }),
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Pilih Anggota"
                                                    }, void 0, false, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 41
                                                    }, this),
                                                    space.members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m.id,
                                                            children: m.name
                                                        }, m.id, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 65
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Berhutang kepada? (Ke)"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                                value: txForm.toId,
                                                onChange: (e)=>setTxForm({
                                                        ...txForm,
                                                        toId: e.target.value
                                                    }),
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Pilih Anggota"
                                                    }, void 0, false, {
                                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 41
                                                    }, this),
                                                    space.members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m.id,
                                                            children: m.name
                                                        }, m.id, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 65
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 351,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Jumlah (Rp)"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                                value: txForm.amount,
                                                onChange: (e)=>setTxForm({
                                                        ...txForm,
                                                        amount: e.target.value
                                                    }),
                                                placeholder: "0",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Catatan"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                                value: txForm.note,
                                                onChange: (e)=>setTxForm({
                                                        ...txForm,
                                                        note: e.target.value
                                                    }),
                                                placeholder: "Contoh: Makan Siang"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsTxModalOpen(false),
                                                className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                                                children: "Batal"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                                                children: "Simpan Transaksi"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 336,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 334,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                    lineNumber: 333,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 101,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18a051e4._.js.map