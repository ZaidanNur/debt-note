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
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Simple Skeleton Component
const Skeleton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "b6089e97ce46b6c6d4433f02c1bf59891d5dc5db5c5683414baa26813ddfb8f4") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6089e97ce46b6c6d4433f02c1bf59891d5dc5db5c5683414baa26813ddfb8f4";
    }
    const { className } = t0;
    const t1 = `animate-pulse bg-gray-200 rounded ${className}`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 23,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "b6089e97ce46b6c6d4433f02c1bf59891d5dc5db5c5683414baa26813ddfb8f4") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6089e97ce46b6c6d4433f02c1bf59891d5dc5db5c5683414baa26813ddfb8f4";
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
    const { data, isLoading, isError, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    if (isLoading) {
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-40 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 74,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-40 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 74,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 74,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-8 w-1/3"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 81,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-20 w-full"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 81,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-20 w-full"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 81,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 81,
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
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8 mt-10",
                            children: [
                                t3,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                            className: "h-8 w-1/3"
                                        }, void 0, false, {
                                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 198
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                            className: "h-20 w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 232
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                            className: "h-20 w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 268
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 171
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 88,
                            columnNumber: 118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 88,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    if (isError) {
        let t1;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-red-600 text-xl font-bold mb-2",
                children: "Error"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 98,
                columnNumber: 12
            }, this);
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        const t2 = error.message || "Gagal memuat data";
        let t3;
        if ($[7] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 106,
                            columnNumber: 119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 106,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 106,
                columnNumber: 12
            }, this);
            $[7] = t2;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        return t3;
    }
    let t1;
    let t10;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[9] !== data?.oweList || $[10] !== data?.owedList || $[11] !== data?.summary) {
        const oweList = data?.oweList?.slice(0, 8) || [];
        const owedList = data?.owedList?.slice(0, 8) || [];
        t10 = "min-h-screen bg-gray-50 p-6 md:p-10";
        t7 = "max-w-7xl mx-auto";
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 130,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/spaces/create",
                        className: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition",
                        children: "+ Buat Utang Space"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 130,
                        columnNumber: 131
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 130,
                columnNumber: 12
            }, this);
            $[22] = t8;
        } else {
            t8 = $[22];
        }
        let t11;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium mb-1",
                        children: "Total Hutang Kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Uang yang harus kamu bayar"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this);
            $[23] = t11;
        } else {
            t11 = $[23];
        }
        const t12 = data?.summary.totalOwe || 0;
        let t13;
        if ($[24] !== t12) {
            t13 = formatIDR(t12);
            $[24] = t12;
            $[25] = t13;
        } else {
            t13 = $[25];
        }
        let t14;
        if ($[26] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold text-red-600",
                            children: t13
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 153,
                            columnNumber: 145
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 153,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this);
            $[26] = t13;
            $[27] = t14;
        } else {
            t14 = $[27];
        }
        let t15;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium mb-1",
                        children: "Total Piutang Kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 161,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Uang teman yang ada di kamu"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 161,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this);
            $[28] = t15;
        } else {
            t15 = $[28];
        }
        const t16 = data?.summary.totalOwed || 0;
        let t17;
        if ($[29] !== t16) {
            t17 = formatIDR(t16);
            $[29] = t16;
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        let t18;
        if ($[31] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between",
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold text-green-600",
                            children: t17
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                            lineNumber: 177,
                            columnNumber: 145
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 177,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, this);
            $[31] = t17;
            $[32] = t18;
        } else {
            t18 = $[32];
        }
        if ($[33] !== t14 || $[34] !== t18) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                    t14,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 184,
                columnNumber: 12
            }, this);
            $[33] = t14;
            $[34] = t18;
            $[35] = t9;
        } else {
            t9 = $[35];
        }
        t5 = "grid lg:grid-cols-2 gap-10";
        let t19;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 border-b border-gray-100 bg-red-50/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-gray-900",
                    children: "Kamu Berhutang Kepada"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 194,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[36] = t19;
        } else {
            t19 = $[36];
        }
        const t20 = oweList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500 text-center",
            children: "Tidak ada data."
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 199,
            columnNumber: 40
        }, this) : oweList.map(_DashboardPageOweListMap);
        let t21;
        if ($[37] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-gray-100",
                children: t20
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, this);
            $[37] = t20;
            $[38] = t21;
        } else {
            t21 = $[38];
        }
        let t22;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-100 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-sm text-indigo-600 font-medium hover:underline",
                    children: "Lihat Semua"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 210,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[39] = t22;
        } else {
            t22 = $[39];
        }
        if ($[40] !== t21) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    t19,
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 216,
                columnNumber: 12
            }, this);
            $[40] = t21;
            $[41] = t6;
        } else {
            t6 = $[41];
        }
        t3 = "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden";
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 border-b border-gray-100 bg-green-50/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-gray-900",
                    children: "Berhutang Kepadamu"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                    lineNumber: 224,
                    columnNumber: 79
                }, this)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 224,
                columnNumber: 12
            }, this);
            $[42] = t4;
        } else {
            t4 = $[42];
        }
        t1 = "divide-y divide-gray-100";
        t2 = owedList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500 text-center",
            children: "Tidak ada data."
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 230,
            columnNumber: 34
        }, this) : owedList.map(_DashboardPageOwedListMap);
        $[9] = data?.oweList;
        $[10] = data?.owedList;
        $[11] = data?.summary;
        $[12] = t1;
        $[13] = t10;
        $[14] = t2;
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t1 = $[12];
        t10 = $[13];
        t2 = $[14];
        t3 = $[15];
        t4 = $[16];
        t5 = $[17];
        t6 = $[18];
        t7 = $[19];
        t8 = $[20];
        t9 = $[21];
    }
    let t11;
    if ($[43] !== t1 || $[44] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[43] = t1;
        $[44] = t2;
        $[45] = t11;
    } else {
        t11 = $[45];
    }
    let t12;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-gray-100 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-sm text-indigo-600 font-medium hover:underline",
                children: "Lihat Semua"
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 267,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[46] = t12;
    } else {
        t12 = $[46];
    }
    let t13;
    if ($[47] !== t11 || $[48] !== t3 || $[49] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[47] = t11;
        $[48] = t3;
        $[49] = t4;
        $[50] = t13;
    } else {
        t13 = $[50];
    }
    let t14;
    if ($[51] !== t13 || $[52] !== t5 || $[53] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[51] = t13;
        $[52] = t5;
        $[53] = t6;
        $[54] = t14;
    } else {
        t14 = $[54];
    }
    let t15;
    if ($[55] !== t14 || $[56] !== t7 || $[57] !== t8 || $[58] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[55] = t14;
        $[56] = t7;
        $[57] = t8;
        $[58] = t9;
        $[59] = t15;
    } else {
        t15 = $[59];
    }
    let t16;
    if ($[60] !== t10 || $[61] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: t15
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[60] = t10;
        $[61] = t15;
        $[62] = t16;
    } else {
        t16 = $[62];
    }
    return t16;
}
_s(DashboardPage, "yyrnRSwcB4NdmA0YIvVoNLe1XQE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = DashboardPage;
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
                        lineNumber: 315,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-900",
                        children: item_0.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 315,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 315,
                columnNumber: 109
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-green-600",
                children: formatIDR(item_0.amount)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 315,
                columnNumber: 368
            }, this)
        ]
    }, item_0.id, true, {
        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
        lineNumber: 315,
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
                        lineNumber: 318,
                        columnNumber: 148
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-900",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                        lineNumber: 318,
                        columnNumber: 290
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 318,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-red-600",
                children: formatIDR(item.amount)
            }, void 0, false, {
                fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
                lineNumber: 318,
                columnNumber: 358
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/debt-note/src/app/dashboard/page.tsx",
        lineNumber: 318,
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

//# sourceMappingURL=debt-note_src_c40c58a9._.js.map