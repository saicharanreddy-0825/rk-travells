//#region node_modules/.nitro/vite/services/ssr/index.js
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-DwjYo8DX.mjs").then((n) => n.t).then((m) => m.default ?? m);
	return serverEntryPromise;
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await (await getServerEntry()).fetch(request, env, ctx);
	} catch (error) {
		console.error("SSR Error:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
} };
//#endregion
export { server_default as default };
