(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/debt-note/src/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/debt-note/src/features/spaces/api/spaces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacesApi",
    ()=>spacesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/api-client.ts [app-client] (ecmascript)");
;
const spacesApi = {
    getAllSpaces: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/spaces');
    },
    getSpaceById: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/spaces/${id}`);
    },
    createSpace: async (name)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/spaces', {
            name
        });
    },
    addMember: async (spaceId, name, id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/spaces/${spaceId}/members`, {
            name,
            id
        });
    },
    addTransaction: async (spaceId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/spaces/${spaceId}/transactions`, data);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/debt-note/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/debt-note/src/app/spaces/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpaceDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/features/spaces/api/spaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function SpaceDetailPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(90);
    if ($[0] !== "7a0532c0752e732c697d0f65813999c09b45ec4c84461cfc99af33bbf70c543a") {
        for(let $i = 0; $i < 90; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a0532c0752e732c697d0f65813999c09b45ec4c84461cfc99af33bbf70c543a";
    }
    const { params } = t0;
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("members");
    const [isMemberModalOpen, setIsMemberModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTxModalOpen, setIsTxModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newMemberName, setNewMemberName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMe, setIsMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            fromId: "",
            toId: "",
            amount: "",
            note: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [txForm, setTxForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== id) {
        t2 = {
            queryKey: [
                "space",
                id
            ],
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].getSpaceById(id)
        };
        $[2] = id;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const { data: space, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
    let t3;
    if ($[4] !== space?.members) {
        t3 = space?.members.some(_SpaceDetailPageAnonymous);
        $[4] = space?.members;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const isCurrentUserMember = t3;
    let t4;
    if ($[6] !== id) {
        t4 = (t5)=>{
            const { name, memberId } = t5;
            return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].addMember(id, name, memberId);
        };
        $[6] = id;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== id || $[9] !== queryClient) {
        t5 = (newMember)=>{
            queryClient.setQueryData([
                "space",
                id
            ], {
                "SpaceDetailPage[<anonymous> > queryClient.setQueryData()]": (old)=>({
                        ...old,
                        members: [
                            ...old.members,
                            newMember
                        ]
                    })
            }["SpaceDetailPage[<anonymous> > queryClient.setQueryData()]"]);
            setIsMemberModalOpen(false);
            setNewMemberName("");
            setIsMe(false);
        };
        $[8] = id;
        $[9] = queryClient;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4 || $[12] !== t5) {
        t6 = {
            mutationFn: t4,
            onSuccess: t5
        };
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const addMemberMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t6);
    let t7;
    if ($[14] !== id) {
        t7 = (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].addTransaction(id, {
                ...data,
                amount: Number(data.amount)
            });
        $[14] = id;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== id || $[17] !== queryClient) {
        t8 = (newTx)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "dashboard"
                ]
            });
            queryClient.setQueryData([
                "space",
                id
            ], {
                "SpaceDetailPage[<anonymous> > queryClient.setQueryData()]": (old_0)=>({
                        ...old_0,
                        transactions: [
                            ...old_0.transactions,
                            newTx
                        ]
                    })
            }["SpaceDetailPage[<anonymous> > queryClient.setQueryData()]"]);
            setIsTxModalOpen(false);
            setTxForm({
                fromId: "",
                toId: "",
                amount: "",
                note: ""
            });
        };
        $[16] = id;
        $[17] = queryClient;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = {
            mutationFn: t7,
            onSuccess: t8
        };
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const addTxMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t9);
    let t10;
    if ($[22] !== addMemberMutation || $[23] !== isMe || $[24] !== newMemberName) {
        t10 = ({
            "SpaceDetailPage[handleAddMember]": (e)=>{
                e.preventDefault();
                if (newMemberName.trim()) {
                    addMemberMutation.mutate({
                        name: newMemberName,
                        memberId: isMe ? "m1" : undefined
                    });
                }
            }
        })["SpaceDetailPage[handleAddMember]"];
        $[22] = addMemberMutation;
        $[23] = isMe;
        $[24] = newMemberName;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    const handleAddMember = t10;
    let t11;
    if ($[26] !== addTxMutation || $[27] !== txForm) {
        t11 = ({
            "SpaceDetailPage[handleAddTx]": (e_0)=>{
                e_0.preventDefault();
                if (txForm.fromId && txForm.toId && txForm.amount) {
                    addTxMutation.mutate(txForm);
                }
            }
        })["SpaceDetailPage[handleAddTx]"];
        $[26] = addTxMutation;
        $[27] = txForm;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    const handleAddTx = t11;
    if (isLoading) {
        let t12;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Loading Data Space..."
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this);
            $[29] = t12;
        } else {
            t12 = $[29];
        }
        return t12;
    }
    if (!space) {
        let t12;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Space Not Found"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this);
            $[30] = t12;
        } else {
            t12 = $[30];
        }
        return t12;
    }
    let t12;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/spaces",
            className: "text-gray-500 hover:text-indigo-600 text-sm mb-2 inline-block",
            children: "← Kembali ke List Space"
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== space.name) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-gray-900",
            children: space.name
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[32] = space.name;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== space.createdAt) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: [
                "Dibuat pada ",
                space.createdAt
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[34] = space.createdAt;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== t13 || $[37] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t14;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "SpaceDetailPage[<button>.onClick]": ()=>setActiveTab("members")
        })["SpaceDetailPage[<button>.onClick]"];
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    const t17 = activeTab === "members" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700";
    let t18;
    if ($[40] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", t17);
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== space.members.length || $[43] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: t18,
            children: [
                "Anggota (",
                space.members.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[42] = space.members.length;
        $[43] = t18;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "SpaceDetailPage[<button>.onClick]": ()=>setActiveTab("transactions")
        })["SpaceDetailPage[<button>.onClick]"];
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    const t21 = activeTab === "transactions" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700";
    let t22;
    if ($[46] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", t21);
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== space.transactions.length || $[49] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t20,
            className: t22,
            children: [
                "Transaksi (",
                space.transactions.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[48] = space.transactions.length;
        $[49] = t22;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "SpaceDetailPage[<button>.onClick]": ()=>setActiveTab("recap")
        })["SpaceDetailPage[<button>.onClick]"];
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    const t25 = activeTab === "recap" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700";
    let t26;
    if ($[52] !== t25) {
        t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 font-medium text-sm transition-all border-b-2", t25);
        $[52] = t25;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            className: t26,
            children: "Rekapitulasi"
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[54] = t26;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t19 || $[57] !== t23 || $[58] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex border-b border-gray-200 mb-8",
            children: [
                t19,
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[56] = t19;
        $[57] = t23;
        $[58] = t27;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== activeTab || $[61] !== space.members) {
        t29 = activeTab === "members" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-in fade-in slide-in-from-left-4 duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-gray-900",
                                children: "Daftar Anggota"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 354,
                                columnNumber: 291
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "SpaceDetailPage[<button>.onClick]": ()=>setIsMemberModalOpen(true)
                                }["SpaceDetailPage[<button>.onClick]"],
                                className: "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition",
                                children: "+ Tambah Anggota"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 354,
                                columnNumber: 350
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 354,
                        columnNumber: 195
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100",
                        children: space.members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "p-8 text-center text-gray-500",
                            children: "Belum ada anggota."
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 356,
                            columnNumber: 263
                        }, this) : space.members.map(_SpaceDetailPageSpaceMembersMap)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 356,
                        columnNumber: 191
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 354,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 354,
            columnNumber: 38
        }, this);
        $[60] = activeTab;
        $[61] = space.members;
        $[62] = t29;
    } else {
        t29 = $[62];
    }
    let t30;
    if ($[63] !== activeTab || $[64] !== space.members || $[65] !== space.transactions) {
        t30 = activeTab === "transactions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-in fade-in slide-in-from-right-4 duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-indigo-50/30 flex justify-between items-center border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-gray-900",
                                children: "Riwayat Transaksi"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 365,
                                columnNumber: 297
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "SpaceDetailPage[<button>.onClick]": ()=>setIsTxModalOpen(true)
                                }["SpaceDetailPage[<button>.onClick]"],
                                className: "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition",
                                children: "+ Catat Hutang"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 365,
                                columnNumber: 359
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 365,
                        columnNumber: 201
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100",
                        children: space.transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "p-8 text-center text-gray-500",
                            children: "Belum ada transaksi."
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                            lineNumber: 367,
                            columnNumber: 266
                        }, this) : space.transactions.map({
                            "SpaceDetailPage[space.transactions.map()]": (tx)=>{
                                const fromName = space.members.find({
                                    "SpaceDetailPage[space.transactions.map() > space.members.find()]": (m_0)=>m_0.id === tx.fromId
                                }["SpaceDetailPage[space.transactions.map() > space.members.find()]"])?.name || "Unknown";
                                const toName = space.members.find({
                                    "SpaceDetailPage[space.transactions.map() > space.members.find()]": (m_1)=>m_1.id === tx.toId
                                }["SpaceDetailPage[space.transactions.map() > space.members.find()]"])?.name || "Unknown";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 flex flex-col sm:flex-row justify-between sm:items-center hover:bg-gray-50 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-gray-900",
                                                            children: fromName
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 187
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-xs",
                                                            children: "berhutang ke"
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 246
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-gray-900",
                                                            children: toName
                                                        }, void 0, false, {
                                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 305
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 141
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: tx.note || "Tanpa catatan"
                                                }, void 0, false, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 368
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 136
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-red-600",
                                                    children: formatIDR(tx.amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 471
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: tx.date
                                                }, void 0, false, {
                                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 535
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 443
                                        }, this)
                                    ]
                                }, tx.id, true, {
                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 22
                                }, this);
                            }
                        }["SpaceDetailPage[space.transactions.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 367,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 365,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 365,
            columnNumber: 43
        }, this);
        $[63] = activeTab;
        $[64] = space.members;
        $[65] = space.transactions;
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    let t31;
    if ($[67] !== activeTab || $[68] !== space.members || $[69] !== space.transactions) {
        t31 = activeTab === "recap" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-in fade-in slide-in-from-right-4 duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-teal-50/30 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-gray-900",
                                children: "Rekapitulasi Hutang Bersih"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 387,
                                columnNumber: 254
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Perhitungan otomatis sisa hutang antar anggota."
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 387,
                                columnNumber: 325
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 387,
                        columnNumber: 194
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100",
                        children: (()=>{
                            const pairDebts = {};
                            space.transactions.forEach({
                                "SpaceDetailPage[<anonymous> > space.transactions.forEach()]": (tx_0)=>{
                                    const pairKey = [
                                        tx_0.fromId,
                                        tx_0.toId
                                    ].sort().join("-");
                                    const isNormalOrder = pairKey === `${tx_0.fromId}-${tx_0.toId}`;
                                    if (!pairDebts[pairKey]) {
                                        pairDebts[pairKey] = 0;
                                    }
                                    if (isNormalOrder) {
                                        pairDebts[pairKey] = pairDebts[pairKey] + tx_0.amount;
                                    } else {
                                        pairDebts[pairKey] = pairDebts[pairKey] - tx_0.amount;
                                    }
                                }
                            }["SpaceDetailPage[<anonymous> > space.transactions.forEach()]"]);
                            const summary = Object.entries(pairDebts).map({
                                "SpaceDetailPage[<anonymous> > (anonymous)()]": (t32)=>{
                                    const [key, amount] = t32;
                                    if (amount === 0) {
                                        return null;
                                    }
                                    const [id1, id2] = key.split("-");
                                    const member1 = space.members.find({
                                        "SpaceDetailPage[<anonymous> > (anonymous)() > space.members.find()]": (m_2)=>m_2.id === id1
                                    }["SpaceDetailPage[<anonymous> > (anonymous)() > space.members.find()]"]);
                                    const member2 = space.members.find({
                                        "SpaceDetailPage[<anonymous> > (anonymous)() > space.members.find()]": (m_3)=>m_3.id === id2
                                    }["SpaceDetailPage[<anonymous> > (anonymous)() > space.members.find()]"]);
                                    if (!member1 || !member2) {
                                        return null;
                                    }
                                    const debtor = amount > 0 ? member1 : member2;
                                    const creditor = amount > 0 ? member2 : member1;
                                    const finalAmount = Math.abs(amount);
                                    return {
                                        debtor,
                                        creditor,
                                        amount: finalAmount
                                    };
                                }
                            }["SpaceDetailPage[<anonymous> > (anonymous)()]"]).filter(Boolean);
                            if (summary.length === 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p-8 text-center text-gray-500",
                                    children: "Tidak ada hutang yang perlu dibayar (Lunas/Kosong)."
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 22
                                }, this);
                            }
                            return summary.map(_SpaceDetailPageAnonymousSummaryMap);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 387,
                        columnNumber: 419
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 387,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 387,
            columnNumber: 36
        }, this);
        $[67] = activeTab;
        $[68] = space.members;
        $[69] = space.transactions;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] !== handleAddMember || $[72] !== isCurrentUserMember || $[73] !== isMe || $[74] !== isMemberModalOpen || $[75] !== newMemberName) {
        t32 = isMemberModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4 text-indigo-600",
                        children: "Tambah Anggota"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 443,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddMember,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border p-2 rounded mb-4 focus:ring-2 ring-indigo-500 outline-none text-gray-900",
                                placeholder: "Nama Anggota",
                                value: newMemberName,
                                onChange: {
                                    "SpaceDetailPage[<input>.onChange]": (e_1)=>setNewMemberName(e_1.target.value)
                                }["SpaceDetailPage[<input>.onChange]"],
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 443,
                                columnNumber: 293
                            }, this),
                            !isCurrentUserMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "isMe",
                                        checked: isMe,
                                        onChange: {
                                            "SpaceDetailPage[<input>.onChange]": (e_2)=>setIsMe(e_2.target.checked)
                                        }["SpaceDetailPage[<input>.onChange]"],
                                        className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 141
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "isMe",
                                        className: "text-sm text-gray-700 select-none cursor-pointer",
                                        children: "Ini Saya (Gunakan Profil Saya)"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 137
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 445,
                                columnNumber: 95
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "SpaceDetailPage[<button>.onClick]": ()=>setIsMemberModalOpen(false)
                                        }["SpaceDetailPage[<button>.onClick]"],
                                        className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 305
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                                        children: "Simpan"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 447,
                                columnNumber: 265
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 443,
                        columnNumber: 260
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 443,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 443,
            columnNumber: 32
        }, this);
        $[71] = handleAddMember;
        $[72] = isCurrentUserMember;
        $[73] = isMe;
        $[74] = isMemberModalOpen;
        $[75] = newMemberName;
        $[76] = t32;
    } else {
        t32 = $[76];
    }
    let t33;
    if ($[77] !== handleAddTx || $[78] !== isTxModalOpen || $[79] !== space.members || $[80] !== txForm) {
        t33 = isTxModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4 text-indigo-600",
                        children: "Catat Hutang Baru"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 461,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddTx,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Siapa yang berhutang? (Dari)"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 315
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                        value: txForm.fromId,
                                        onChange: {
                                            "SpaceDetailPage[<select>.onChange]": (e_3)=>setTxForm({
                                                    ...txForm,
                                                    fromId: e_3.target.value
                                                })
                                        }["SpaceDetailPage[<select>.onChange]"],
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Pilih Anggota"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 70
                                            }, this),
                                            space.members.map(_SpaceDetailPageSpaceMembersMap2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 415
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 461,
                                columnNumber: 310
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Berhutang kepada? (Ke)"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 182
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                        value: txForm.toId,
                                        onChange: {
                                            "SpaceDetailPage[<select>.onChange]": (e_4)=>setTxForm({
                                                    ...txForm,
                                                    toId: e_4.target.value
                                                })
                                        }["SpaceDetailPage[<select>.onChange]"],
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Pilih Anggota"
                                            }, void 0, false, {
                                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 70
                                            }, this),
                                            space.members.map(_SpaceDetailPageSpaceMembersMap3)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 276
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 466,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Jumlah (Rp)"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 182
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                        value: txForm.amount,
                                        onChange: {
                                            "SpaceDetailPage[<input>.onChange]": (e_5)=>setTxForm({
                                                    ...txForm,
                                                    amount: e_5.target.value
                                                })
                                        }["SpaceDetailPage[<input>.onChange]"],
                                        placeholder: "0",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 265
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 471,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Catatan"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "w-full border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900",
                                        value: txForm.note,
                                        onChange: {
                                            "SpaceDetailPage[<input>.onChange]": (e_6)=>setTxForm({
                                                    ...txForm,
                                                    note: e_6.target.value
                                                })
                                        }["SpaceDetailPage[<input>.onChange]"],
                                        placeholder: "Contoh: Makan Siang"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 177
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 476,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "SpaceDetailPage[<button>.onClick]": ()=>setIsTxModalOpen(false)
                                        }["SpaceDetailPage[<button>.onClick]"],
                                        className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 140
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                                        children: "Simpan Transaksi"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                                lineNumber: 481,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 461,
                        columnNumber: 259
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 461,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 461,
            columnNumber: 28
        }, this);
        $[77] = handleAddTx;
        $[78] = isTxModalOpen;
        $[79] = space.members;
        $[80] = txForm;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t15 || $[83] !== t28 || $[84] !== t29 || $[85] !== t30 || $[86] !== t31 || $[87] !== t32 || $[88] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-6 md:p-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    t15,
                    t28,
                    t29,
                    t30,
                    t31,
                    t32,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 494,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[82] = t15;
        $[83] = t28;
        $[84] = t29;
        $[85] = t30;
        $[86] = t31;
        $[87] = t32;
        $[88] = t33;
        $[89] = t34;
    } else {
        t34 = $[89];
    }
    return t34;
}
_s(SpaceDetailPage, "YeJVnzNVO33VIO8yeHdAhNDN/fE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = SpaceDetailPage;
function _SpaceDetailPageSpaceMembersMap3(m_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m_5.id,
        children: m_5.name
    }, m_5.id, false, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 509,
        columnNumber: 10
    }, this);
}
function _SpaceDetailPageSpaceMembersMap2(m_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m_4.id,
        children: m_4.name
    }, m_4.id, false, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 512,
        columnNumber: 10
    }, this);
}
function _SpaceDetailPageAnonymousSummaryMap(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex items-center justify-between hover:bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-bold",
                        children: item?.debtor.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 515,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-sm",
                        children: "perlu membayar ke"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 515,
                        columnNumber: 263
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold",
                        children: item?.creditor.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                        lineNumber: 515,
                        columnNumber: 327
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 515,
                columnNumber: 92
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-gray-900 text-lg",
                children: formatIDR(item?.amount || 0)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 515,
                columnNumber: 469
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 515,
        columnNumber: 10
    }, this);
}
function _SpaceDetailPageSpaceMembersMap(member) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 flex items-center gap-4 hover:bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold",
                children: member.name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 518,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-gray-900",
                children: member.name
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
                lineNumber: 518,
                columnNumber: 230
            }, this)
        ]
    }, member.id, true, {
        fileName: "[project]/debt-note/src/app/spaces/[id]/page.tsx",
        lineNumber: 518,
        columnNumber: 10
    }, this);
}
function _SpaceDetailPageAnonymous(m) {
    return m.id === "m1";
}
var _c;
__turbopack_context__.k.register(_c, "SpaceDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=debt-note_src_17c0ed40._.js.map