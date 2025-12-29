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
"[project]/debt-note/src/features/dashboard/api/dashboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardApi",
    ()=>dashboardApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/lib/api-client.ts [app-client] (ecmascript)");
;
const dashboardApi = {
    getDashboardData: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboard');
    }
};
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
"[project]/debt-note/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$dashboard$2f$api$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/features/dashboard/api/dashboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/features/spaces/api/spaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Simple Skeleton Component
const Skeleton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "e10ac91cb5f4ea0550ec9c64ee8538e43ccc1de7253e70bd8a2124ce209ccbe6") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e10ac91cb5f4ea0550ec9c64ee8538e43ccc1de7253e70bd8a2124ce209ccbe6";
    }
    const { className } = t0;
    const t1 = `animate-pulse bg-gray-200 rounded ${className}`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
};
_c = Skeleton;
// Currency Formatter
const formatIDR = (amount)=>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
};
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(80);
    if ($[0] !== "e10ac91cb5f4ea0550ec9c64ee8538e43ccc1de7253e70bd8a2124ce209ccbe6") {
        for(let $i = 0; $i < 80; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e10ac91cb5f4ea0550ec9c64ee8538e43ccc1de7253e70bd8a2124ce209ccbe6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "dashboard"
            ],
            queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$dashboard$2f$api$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardApi"].getDashboardData
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: dashboardData, isLoading: isDashboardLoading, isError, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            queryKey: [
                "spaces"
            ],
            queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].getAllSpaces
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data: spaces, isLoading: isSpacesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    if (isDashboardLoading || isSpacesLoading) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 86,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-40 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 93,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-40 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 93,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 93,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        let t4;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 p-6 md:p-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-8",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                    className: "h-60 w-full rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 167
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                    className: "h-60 w-full rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 215
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 100,
                            columnNumber: 118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 100,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    let t2;
    if ($[6] !== router) {
        t2 = ({
            "DashboardPage[handleLogout]": ()=>{
                router.push("/");
            }
        })["DashboardPage[handleLogout]"];
        $[6] = router;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const handleLogout = t2;
    if (isError) {
        let t3;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-red-600 text-xl font-bold mb-2",
                children: "Error"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 123,
                columnNumber: 12
            }, this);
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        const t4 = error.message || "Gagal memuat data";
        let t5;
        if ($[9] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: t4
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 131,
                            columnNumber: 119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 131,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 131,
                columnNumber: 12
            }, this);
            $[9] = t4;
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        return t5;
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[11] !== dashboardData?.oweList || $[12] !== dashboardData?.owedList || $[13] !== dashboardData?.summary || $[14] !== handleLogout || $[15] !== isLogoutModalOpen) {
        const oweList = dashboardData?.oweList?.slice(0, 8) || [];
        const owedList = dashboardData?.owedList?.slice(0, 8) || [];
        t13 = "min-h-screen bg-gray-50 p-6 md:p-10";
        t9 = "max-w-7xl mx-auto";
        let t14;
        let t15;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, this);
            t15 = ({
                "DashboardPage[<button>.onClick]": ()=>setIsLogoutModalOpen(true)
            })["DashboardPage[<button>.onClick]"];
            $[27] = t14;
            $[28] = t15;
        } else {
            t14 = $[27];
            t15 = $[28];
        }
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: t15,
                        className: "text-red-500 hover:text-red-700 font-medium text-sm flex items-center gap-1 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 274
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                lineNumber: 169,
                                columnNumber: 195
                            }, this),
                            "Logout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 169,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this);
            $[29] = t10;
        } else {
            t10 = $[29];
        }
        if ($[30] !== handleLogout || $[31] !== isLogoutModalOpen) {
            t11 = isLogoutModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in fade-in zoom-in duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold mb-2 text-gray-900",
                            children: "Konfirmasi Logout"
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 175,
                            columnNumber: 228
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mb-6",
                            children: "Apakah Anda yakin ingin keluar dari aplikasi?"
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 175,
                            columnNumber: 303
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "DashboardPage[<button>.onClick]": ()=>setIsLogoutModalOpen(false)
                                    }["DashboardPage[<button>.onClick]"],
                                    className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 426
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition",
                                    children: "Ya, Logout"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 153
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 175,
                            columnNumber: 386
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 175,
                    columnNumber: 119
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 175,
                columnNumber: 34
            }, this);
            $[30] = handleLogout;
            $[31] = isLogoutModalOpen;
            $[32] = t11;
        } else {
            t11 = $[32];
        }
        let t16;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium mb-1",
                        children: "Total Hutang Kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 186,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Uang yang harus kamu bayar"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 186,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this);
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        const t17 = dashboardData?.summary.totalOwe || 0;
        let t18;
        if ($[34] !== t17) {
            t18 = formatIDR(t17);
            $[34] = t17;
            $[35] = t18;
        } else {
            t18 = $[35];
        }
        let t19;
        if ($[36] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between",
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold text-red-600",
                            children: t18
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 202,
                            columnNumber: 145
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 202,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, this);
            $[36] = t18;
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        let t20;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium mb-1",
                        children: "Total Piutang Kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 210,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Uang teman yang ada di kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 210,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[38] = t20;
        } else {
            t20 = $[38];
        }
        const t21 = dashboardData?.summary.totalOwed || 0;
        let t22;
        if ($[39] !== t21) {
            t22 = formatIDR(t21);
            $[39] = t21;
            $[40] = t22;
        } else {
            t22 = $[40];
        }
        let t23;
        if ($[41] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold text-green-600",
                            children: t22
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 226,
                            columnNumber: 145
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 226,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this);
            $[41] = t22;
            $[42] = t23;
        } else {
            t23 = $[42];
        }
        if ($[43] !== t19 || $[44] !== t23) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                    t19,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[43] = t19;
            $[44] = t23;
            $[45] = t12;
        } else {
            t12 = $[45];
        }
        t7 = "grid lg:grid-cols-2 gap-10 mb-16";
        let t24;
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 border-b border-gray-100 bg-red-50/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-gray-900",
                    children: "Kamu Berhutang Kepada"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 243,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[46] = t24;
        } else {
            t24 = $[46];
        }
        const t25 = oweList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500 text-center",
            children: "Tidak ada data."
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 248,
            columnNumber: 40
        }, this) : oweList.map(_DashboardPageOweListMap);
        if ($[47] !== t25) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100",
                        children: t25
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 250,
                        columnNumber: 104
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 250,
                columnNumber: 12
            }, this);
            $[47] = t25;
            $[48] = t8;
        } else {
            t8 = $[48];
        }
        t5 = "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden";
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 border-b border-gray-100 bg-green-50/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-gray-900",
                    children: "Berhutang Kepadamu"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 258,
                    columnNumber: 79
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 258,
                columnNumber: 12
            }, this);
            $[49] = t6;
        } else {
            t6 = $[49];
        }
        t3 = "divide-y divide-gray-100";
        t4 = owedList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500 text-center",
            children: "Tidak ada data."
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 264,
            columnNumber: 34
        }, this) : owedList.map(_DashboardPageOwedListMap);
        $[11] = dashboardData?.oweList;
        $[12] = dashboardData?.owedList;
        $[13] = dashboardData?.summary;
        $[14] = handleLogout;
        $[15] = isLogoutModalOpen;
        $[16] = t10;
        $[17] = t11;
        $[18] = t12;
        $[19] = t13;
        $[20] = t3;
        $[21] = t4;
        $[22] = t5;
        $[23] = t6;
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
    } else {
        t10 = $[16];
        t11 = $[17];
        t12 = $[18];
        t13 = $[19];
        t3 = $[20];
        t4 = $[21];
        t5 = $[22];
        t6 = $[23];
        t7 = $[24];
        t8 = $[25];
        t9 = $[26];
    }
    let t14;
    if ($[50] !== t3 || $[51] !== t4) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[50] = t3;
        $[51] = t4;
        $[52] = t14;
    } else {
        t14 = $[52];
    }
    let t15;
    if ($[53] !== t14 || $[54] !== t5 || $[55] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[53] = t14;
        $[54] = t5;
        $[55] = t6;
        $[56] = t15;
    } else {
        t15 = $[56];
    }
    let t16;
    if ($[57] !== t15 || $[58] !== t7 || $[59] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[57] = t15;
        $[58] = t7;
        $[59] = t8;
        $[60] = t16;
    } else {
        t16 = $[60];
    }
    let t17;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-gray-900",
            children: "Utang Spaces Anda"
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[61] = t17;
    } else {
        t17 = $[61];
    }
    let t18;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-8",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/spaces",
                    className: "bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition shadow-md flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                lineNumber: 332,
                                columnNumber: 319
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 332,
                            columnNumber: 240
                        }, this),
                        "Buat Space Baru"
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 332,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[62] = t18;
    } else {
        t18 = $[62];
    }
    let t19;
    if ($[63] !== spaces) {
        t19 = spaces?.map(_DashboardPageAnonymous);
        $[63] = spaces;
        $[64] = t19;
    } else {
        t19 = $[64];
    }
    let t20;
    if ($[65] !== spaces?.length) {
        t20 = spaces?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-full text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Belum ada space. Buat sekarang!"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 347,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 347,
            columnNumber: 35
        }, this);
        $[65] = spaces?.length;
        $[66] = t20;
    } else {
        t20 = $[66];
    }
    let t21;
    if ($[67] !== t19 || $[68] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 border-t border-gray-200 pt-10",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 355,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[67] = t19;
        $[68] = t20;
        $[69] = t21;
    } else {
        t21 = $[69];
    }
    let t22;
    if ($[70] !== t10 || $[71] !== t11 || $[72] !== t12 || $[73] !== t16 || $[74] !== t21 || $[75] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t12,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[70] = t10;
        $[71] = t11;
        $[72] = t12;
        $[73] = t16;
        $[74] = t21;
        $[75] = t9;
        $[76] = t22;
    } else {
        t22 = $[76];
    }
    let t23;
    if ($[77] !== t13 || $[78] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: t22
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[77] = t13;
        $[78] = t22;
        $[79] = t23;
    } else {
        t23 = $[79];
    }
    return t23;
}
_s(DashboardPage, "ejTyiPP/hGi7iQ17+RzUsGzBnKw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = DashboardPage;
function _DashboardPageAnonymous(space) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/spaces/${space.id}`,
        className: "group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-indigo-50 rounded-lg text-indigo-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 421
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                lineNumber: 387,
                                columnNumber: 342
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 387,
                            columnNumber: 281
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full",
                            children: [
                                space.members?.length || 0,
                                " Anggota"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 387,
                            columnNumber: 769
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 387,
                    columnNumber: 225
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors truncate",
                    children: space.name
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 387,
                    columnNumber: 907
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 mt-2",
                    children: [
                        "Dibuat: ",
                        new Date(space.createdAt).toLocaleDateString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 387,
                    columnNumber: 1027
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 387,
            columnNumber: 78
        }, this)
    }, space.id, false, {
        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
        lineNumber: 387,
        columnNumber: 10
    }, this);
}
function _DashboardPageOwedListMap(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex justify-between items-center hover:bg-gray-50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm",
                        children: item_0.name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 390,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-900",
                        children: item_0.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 390,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 390,
                columnNumber: 109
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-green-600",
                children: formatIDR(item_0.amount)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 390,
                columnNumber: 368
            }, this)
        ]
    }, item_0.id, true, {
        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
        lineNumber: 390,
        columnNumber: 10
    }, this);
}
function _DashboardPageOweListMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex justify-between items-center hover:bg-gray-50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm",
                        children: item.name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 393,
                        columnNumber: 148
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-900",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 393,
                        columnNumber: 290
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 393,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-red-600",
                children: formatIDR(item.amount)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 393,
                columnNumber: 358
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
        lineNumber: 393,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=debt-note_src_01f5f34f._.js.map