//#region src/index.ts
/**
* dsh-crt-theme node half: the theme is a pure browser-side concern (theme
* registry registration + effect overlays), so the host half is an inert
* Cordis plugin that keeps the loader row resolvable.
* @module @dsh-external/dsh-crt-theme
*/
/** Stable Cordis plugin name (the loader row id). */
const name = "dsh-crt-theme";
/** No host services are required or provided. */
const inject = [];
/**
* Activate the node half: nothing to do on the host — all effects live in the
* client bundle (`./client`).
*/
function apply() {}
//#endregion
export { apply, inject, name };
