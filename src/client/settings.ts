/**
 * dsh-crt-theme client preferences: the two independent switches and the
 * selected palette, persisted in `localStorage` and observable so the
 * Settings panel and the theme layer stay in sync without a reload.
 * @module @dsh-external/dsh-crt-theme/client/settings
 */

/** Palette identifiers supplied by this skin. */
export type CrtScheme = 'unit02' | 'unit01'

/** Stored palette values, including the pre-EVA aliases this skin accepts. */
export type CrtSchemeInput = CrtScheme | 'amber' | 'violet'

/** localStorage key persisting whether the CRT color scheme is applied. */
const ENABLED_STORAGE_KEY = 'dsh-crt-theme:enabled'

/** localStorage key persisting whether the hardware-effect layer is on. */
const EFFECTS_STORAGE_KEY = 'dsh-crt-theme:effects'

/** localStorage key persisting the selected CRT palette. */
const SCHEME_STORAGE_KEY = 'dsh-crt-theme:scheme'

/** The complete persisted client preference set. */
export interface CrtPreferences {
  /** Whether the CRT token layer replaces the active DSH palette. */
  readonly enabled: boolean
  /** Whether scanlines, vignette, grille, and phosphor flicker render. */
  readonly effects: boolean
  /** The selected CRT palette. */
  readonly scheme: CrtScheme
}

/** One selectable palette as the Settings panel renders it. */
export interface CrtSchemeOption {
  /** Stored palette identifier. */
  readonly id: CrtScheme
  /** Display name. */
  readonly label: string
  /** Short description of the palette's character. */
  readonly detail: string
  /** Colors previewed by the panel, in display order. */
  readonly swatch: readonly [string, string, string]
}

/** Palettes the Settings panel offers, in display order. */
export const SCHEME_OPTIONS: readonly CrtSchemeOption[] = [
  {
    id: 'unit02',
    label: 'Unit-02',
    detail: '黑底红橙仪表、琥珀信号',
    swatch: ['#030202', '#ff641f', '#ffb000'],
  },
  {
    id: 'unit01',
    label: 'Unit-01',
    detail: '黑紫仪表、酸性绿信号',
    swatch: ['#07050b', '#a948da', '#a7ed28'],
  },
]

/** Defaults for a fresh installation: skin on, effects on, Unit-02. */
export const DEFAULT_PREFERENCES: CrtPreferences = { enabled: true, effects: true, scheme: 'unit02' }

/** Resolve current and legacy public inputs to one stored scheme name. */
export function normalizeScheme(scheme: CrtSchemeInput): CrtScheme {
  return scheme === 'unit01' || scheme === 'violet' ? 'unit01' : 'unit02'
}

/**
 * Read one stored boolean, treating an unreadable or absent value as its default.
 * @param key - storage key.
 * @param fallback - value used when nothing usable is stored.
 * @returns the stored boolean or the fallback.
 */
function readBoolean(key: string, fallback: boolean): boolean {
  try {
    const stored = localStorage.getItem(key)
    if (stored !== null) return stored !== '0'
  } catch {
    // Storage may be unavailable in embedded contexts; the default still applies.
  }
  return fallback
}

/**
 * Read the last selected palette, migrating legacy names to their EVA successors.
 * @returns the stored palette or the default.
 */
function readScheme(): CrtScheme {
  try {
    const stored = localStorage.getItem(SCHEME_STORAGE_KEY)
    if (stored !== null) return normalizeScheme(stored as CrtSchemeInput)
  } catch {
    // Storage may be unavailable in embedded contexts; the default still applies.
  }
  return DEFAULT_PREFERENCES.scheme
}

/** Read every persisted preference, falling back per field. */
export function readPreferences(): CrtPreferences {
  return {
    enabled: readBoolean(ENABLED_STORAGE_KEY, DEFAULT_PREFERENCES.enabled),
    effects: readBoolean(EFFECTS_STORAGE_KEY, DEFAULT_PREFERENCES.effects),
    scheme: readScheme(),
  }
}

/** In-memory preferences, seeded from storage and the panel's read source. */
let current: CrtPreferences = readPreferences()

/** Panel subscribers notified after every accepted change. */
const listeners = new Set<(preferences: CrtPreferences) => void>()

/**
 * Persist one storage entry on a best-effort basis.
 * @param key - storage key.
 * @param value - value to store.
 */
function persist(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Ignore storage errors — the in-memory preference still applies this load.
  }
}

/** The current preferences; the returned object is replaced, never mutated. */
export function getPreferences(): CrtPreferences {
  return current
}

/**
 * Merge one change into the preferences, persist it, and notify subscribers.
 * @param patch - the fields to change.
 * @returns the preferences after the change.
 */
export function updatePreferences(patch: Partial<CrtPreferences>): CrtPreferences {
  current = { ...current, ...patch }
  persist(ENABLED_STORAGE_KEY, current.enabled ? '1' : '0')
  persist(EFFECTS_STORAGE_KEY, current.effects ? '1' : '0')
  persist(SCHEME_STORAGE_KEY, current.scheme)
  for (const listener of listeners) listener(current)
  return current
}

/**
 * Subscribe to preference changes.
 * @param listener - called after every accepted change.
 * @returns the unsubscribe function.
 */
export function subscribePreferences(listener: (preferences: CrtPreferences) => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/**
 * Select a palette, accepting the legacy aliases this skin keeps supporting.
 * @param scheme - the requested palette.
 * @returns the preferences after the change.
 */
export function selectScheme(scheme: CrtSchemeInput): CrtPreferences {
  return updatePreferences({ scheme: normalizeScheme(scheme) })
}

/**
 * Flip one boolean preference.
 * @param key - which switch to flip.
 * @returns the preferences after the change.
 */
export function togglePreference(key: 'enabled' | 'effects'): CrtPreferences {
  return updatePreferences({ [key]: !current[key] } as Partial<CrtPreferences>)
}
