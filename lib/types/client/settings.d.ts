/**
 * dsh-crt-theme client preferences: the two independent switches and the
 * selected palette, persisted in `localStorage` and observable so the
 * Settings panel and the theme layer stay in sync without a reload.
 * @module @dsh-external/dsh-crt-theme/client/settings
 */
/** Palette identifiers supplied by this skin. */
export type CrtScheme = 'unit02' | 'unit01';
/** Stored palette values, including the pre-EVA aliases this skin accepts. */
export type CrtSchemeInput = CrtScheme | 'amber' | 'violet';
/** The complete persisted client preference set. */
export interface CrtPreferences {
    /** Whether the CRT token layer replaces the active DSH palette. */
    readonly enabled: boolean;
    /** Whether scanlines, vignette, grille, and phosphor flicker render. */
    readonly effects: boolean;
    /** The selected CRT palette. */
    readonly scheme: CrtScheme;
}
/** One selectable palette as the Settings panel renders it. */
export interface CrtSchemeOption {
    /** Stored palette identifier. */
    readonly id: CrtScheme;
    /** Display name. */
    readonly label: string;
    /** Short description of the palette's character. */
    readonly detail: string;
    /** Colors previewed by the panel, in display order. */
    readonly swatch: readonly [string, string, string];
}
/** Palettes the Settings panel offers, in display order. */
export declare const SCHEME_OPTIONS: readonly CrtSchemeOption[];
/** Defaults for a fresh installation: skin on, effects on, Unit-02. */
export declare const DEFAULT_PREFERENCES: CrtPreferences;
/** Resolve current and legacy public inputs to one stored scheme name. */
export declare function normalizeScheme(scheme: CrtSchemeInput): CrtScheme;
/** Read every persisted preference, falling back per field. */
export declare function readPreferences(): CrtPreferences;
/** The current preferences; the returned object is replaced, never mutated. */
export declare function getPreferences(): CrtPreferences;
/**
 * Merge one change into the preferences, persist it, and notify subscribers.
 * @param patch - the fields to change.
 * @returns the preferences after the change.
 */
export declare function updatePreferences(patch: Partial<CrtPreferences>): CrtPreferences;
/**
 * Subscribe to preference changes.
 * @param listener - called after every accepted change.
 * @returns the unsubscribe function.
 */
export declare function subscribePreferences(listener: (preferences: CrtPreferences) => void): () => void;
/**
 * Select a palette, accepting the legacy aliases this skin keeps supporting.
 * @param scheme - the requested palette.
 * @returns the preferences after the change.
 */
export declare function selectScheme(scheme: CrtSchemeInput): CrtPreferences;
/**
 * Flip one boolean preference.
 * @param key - which switch to flip.
 * @returns the preferences after the change.
 */
export declare function togglePreference(key: 'enabled' | 'effects'): CrtPreferences;
