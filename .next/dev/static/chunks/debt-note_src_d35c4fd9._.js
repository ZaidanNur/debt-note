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
"[project]/debt-note/src/app/spaces/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpacesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/src/features/spaces/api/spaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/debt-note/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SpacesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "a4c4714a2f04a9c6becd61f0fa39dad3a2bafd81eb897f8f9c1e47bfb3a702b8") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a4c4714a2f04a9c6becd61f0fa39dad3a2bafd81eb897f8f9c1e47bfb3a702b8";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSpaceName, setNewSpaceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "spaces"
            ],
            queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].getAllSpaces
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: spaces, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    let t1;
    if ($[2] !== queryClient) {
        t1 = {
            mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$src$2f$features$2f$spaces$2f$api$2f$spaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacesApi"].createSpace,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "spaces"
                    ]
                });
                setIsModalOpen(false);
                setNewSpaceName("");
            }
        };
        $[2] = queryClient;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    let t2;
    if ($[4] !== createMutation || $[5] !== newSpaceName) {
        t2 = ({
            "SpacesPage[handleCreate]": (e)=>{
                e.preventDefault();
                if (newSpaceName.trim()) {
                    createMutation.mutate(newSpaceName);
                }
            }
        })["SpacesPage[handleCreate]"];
        $[4] = createMutation;
        $[5] = newSpaceName;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleCreate = t2;
    let t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    className: "text-gray-500 hover:text-indigo-600 text-sm mb-2 inline-block",
                    children: "← Kembali ke Dashboard"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 72,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900",
                    children: "Utang Spaces"
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 72,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mt-2",
                    children: "Kelola grup dan catatan hutangmu disini."
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 72,
                    columnNumber: 208
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        t4 = ({
            "SpacesPage[<button>.onClick]": ()=>setIsModalOpen(true)
        })["SpacesPage[<button>.onClick]"];
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-10",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t4,
                    className: "bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition shadow-lg flex items-center gap-2",
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
                                d: "M12 4v16m8-8H4"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 84,
                                columnNumber: 308
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 84,
                            columnNumber: 229
                        }, this),
                        "Buat Space Baru"
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 84,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== createMutation || $[11] !== handleCreate || $[12] !== isModalOpen || $[13] !== newSpaceName) {
        t6 = isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6 text-indigo-600",
                        children: "Buat Space Baru"
                    }, void 0, false, {
                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                        lineNumber: 91,
                        columnNumber: 219
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCreate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Nama Space"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 347
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newSpaceName,
                                        onChange: {
                                            "SpacesPage[<input>.onChange]": (e_0)=>setNewSpaceName(e_0.target.value)
                                        }["SpacesPage[<input>.onChange]"],
                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900",
                                        placeholder: "Contoh: Liburan Bali",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 429
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 91,
                                columnNumber: 325
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "SpacesPage[<button>.onClick]": ()=>setIsModalOpen(false)
                                        }["SpacesPage[<button>.onClick]"],
                                        className: "px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 308
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: createMutation.isPending,
                                        className: "px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50",
                                        children: createMutation.isPending ? "Membuat..." : "Buat Space"
                                    }, void 0, false, {
                                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 152
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 93,
                                columnNumber: 268
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                        lineNumber: 91,
                        columnNumber: 295
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                lineNumber: 91,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 91,
            columnNumber: 25
        }, this);
        $[10] = createMutation;
        $[11] = handleCreate;
        $[12] = isModalOpen;
        $[13] = newSpaceName;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== isLoading || $[16] !== spaces) {
        t7 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: [
                1,
                2,
                3
            ].map(_SpacesPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 106,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [
                spaces?.map(_SpacesPageAnonymous2),
                spaces?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full py-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-gray-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 472
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 106,
                                columnNumber: 377
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 106,
                            columnNumber: 279
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-2",
                            children: "Belum ada Space"
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 106,
                            columnNumber: 753
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Buat space baru untuk mulai mencatat hutang bersama teman."
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 106,
                            columnNumber: 826
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 106,
                    columnNumber: 230
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 106,
            columnNumber: 111
        }, this);
        $[15] = isLoading;
        $[16] = spaces;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t6 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-6 md:p-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                lineNumber: 115,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
}
_s(SpacesPage, "p0evPPzuW4agQjjhdgWT3sSfB88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = SpacesPage;
function _SpacesPageAnonymous2(space) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/spaces/${space.id}`,
        className: "group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-indigo-50 rounded-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-indigo-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                }, void 0, false, {
                                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 434
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 125,
                                columnNumber: 339
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 125,
                            columnNumber: 294
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-full",
                            children: [
                                space.members?.length || 0,
                                " Anggota"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 125,
                            columnNumber: 782
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 125,
                    columnNumber: 239
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors",
                    children: space.name
                }, void 0, false, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 125,
                    columnNumber: 920
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm mb-6 flex-grow",
                    children: [
                        "Dibuat pada ",
                        new Date(space.createdAt).toLocaleDateString("id-ID")
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 125,
                    columnNumber: 1036
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-indigo-600 font-medium text-sm",
                    children: [
                        "Kelola Space",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                                lineNumber: 125,
                                columnNumber: 1373
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                            lineNumber: 125,
                            columnNumber: 1242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/debt-note/src/app/spaces/page.tsx",
                    lineNumber: 125,
                    columnNumber: 1159
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/debt-note/src/app/spaces/page.tsx",
            lineNumber: 125,
            columnNumber: 78
        }, this)
    }, space.id, false, {
        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
        lineNumber: 125,
        columnNumber: 10
    }, this);
}
function _SpacesPageAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$debt$2d$note$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-40 bg-gray-200 animate-pulse rounded-2xl"
    }, i, false, {
        fileName: "[project]/debt-note/src/app/spaces/page.tsx",
        lineNumber: 128,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SpacesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=debt-note_src_d35c4fd9._.js.map