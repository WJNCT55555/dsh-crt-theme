/**
 * dsh-crt-theme node half: the theme is a pure browser-side concern (theme
 * registry registration + effect overlays), so the host half is an inert
 * Cordis plugin that keeps the loader row resolvable.
 * @module @dsh-external/dsh-crt-theme
 */
/** Stable Cordis plugin name (the loader row id). */
export declare const name = "dsh-crt-theme";
/** No host services are required or provided. */
export declare const inject: string[];
/**
 * Activate the node half: nothing to do on the host — all effects live in the
 * client bundle (`./client`).
 */
export declare function apply(): void;
