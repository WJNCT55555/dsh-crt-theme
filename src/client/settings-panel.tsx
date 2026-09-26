/**
 * The CRT skin's Settings panel: two independent switches (color scheme and
 * hardware effects) plus the palette picker. Rendered inside DSH's Settings
 * dialog through the `settings.section` slot.
 *
 * The panel is deliberately self-contained: it imports no DSH client package
 * and styles itself from the same `--dsw-*` tokens the skin overrides, so it
 * follows whichever palette is active.
 * @module @dsh-external/dsh-crt-theme/client/settings-panel
 */
import { createElement, useCallback, useEffect, useState } from 'react'
import type { KeyboardEvent, ReactElement } from 'react'
import { getPreferences, SCHEME_OPTIONS, subscribePreferences, selectScheme, updatePreferences } from './settings.ts'
import type { CrtPreferences, CrtScheme } from './settings.ts'

/** Toggle track geometry, shared by the track, thumb, and thumb travel. */
const TRACK_WIDTH = 34
const TRACK_HEIGHT = 18
const THUMB_SIZE = 14
const THUMB_INSET = 2

/** One labeled switch row: title, explanation, and the switch itself. */
interface CrtToggleRowProps {
  /** Row title. */
  readonly label: string
  /** One-line explanation shown under the title. */
  readonly detail: string
  /** Current state. */
  readonly checked: boolean
  /** Called with the requested next state. */
  readonly onChange: (next: boolean) => void
}

/**
 * Render one switch row.
 * @param props - row copy, state, and change handler.
 * @returns the row element.
 */
function CrtToggleRow({ label, detail, checked, onChange }: CrtToggleRowProps): ReactElement {
  const onKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== ' ' && event.key !== 'Enter') return
    event.preventDefault()
    onChange(!checked)
  }, [checked, onChange])

  return createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '12px 0',
      },
    },
    createElement(
      'div',
      { style: { display: 'grid', gap: '2px', minWidth: '0' } },
      createElement(
        'span',
        { style: { color: 'var(--dsw-alias-label-primary)', fontSize: '13px' } },
        label,
      ),
      createElement(
        'span',
        { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: '12px', lineHeight: '1.5' } },
        detail,
      ),
    ),
    createElement(
      'button',
      {
        'aria-checked': checked,
        'aria-label': label,
        onClick: () => onChange(!checked),
        onKeyDown,
        role: 'switch',
        style: {
          flex: '0 0 auto',
          position: 'relative',
          width: `${TRACK_WIDTH}px`,
          height: `${TRACK_HEIGHT}px`,          padding: '0',
          border: '1px solid var(--dsw-alias-border-l3)',
          borderRadius: '2px',
          background: checked ? 'var(--dsw-alias-button-primary-fill)' : 'var(--dsw-alias-bg-layer-2)',
          cursor: 'pointer',
          transition: 'background 120ms linear, border-color 120ms linear',
        },
        type: 'button',
      },
      createElement('span', {
        style: {
          position: 'absolute',
          top: `${THUMB_INSET}px`,
          left: checked ? `${TRACK_WIDTH - THUMB_SIZE - THUMB_INSET - 2}px` : `${THUMB_INSET}px`,
          width: `${THUMB_SIZE}px`,
          height: `${THUMB_SIZE}px`,
          background: checked ? 'var(--dsw-alias-brand-primary-invert)' : 'var(--dsw-alias-label-tertiary)',
          transition: 'left 120ms linear, background 120ms linear',
        },
      }),
    ),
  )
}

/** One palette card. */
interface CrtSchemeCardProps {
  /** Palette identifier. */
  readonly id: CrtScheme
  /** Display name. */
  readonly label: string
  /** Short palette description. */
  readonly detail: string
  /** Preview colors. */
  readonly swatch: readonly [string, string, string]
  /** Whether this palette is selected. */
  readonly selected: boolean
  /** Called when the palette is chosen. */
  readonly onSelect: (id: CrtScheme) => void
}

/**
 * Render one selectable palette card.
 * @param props - palette identity, preview colors, and selection state.
 * @returns the card element.
 */
function CrtSchemeCard({ id, label, detail, swatch, selected, onSelect }: CrtSchemeCardProps): ReactElement {
  return createElement(
    'button',
    {
      'aria-pressed': selected,
      onClick: () => onSelect(id),
      type: 'button',
      style: {
        display: 'grid',
        gap: '8px',
        padding: '10px',
        textAlign: 'left',
        border: `1px solid ${selected ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-border-l2)'}`,
        borderRadius: '2px',
        background: selected
          ? 'var(--dsw-alias-button-ghost-active-fill)'
          : 'var(--dsw-alias-bg-layer-1)',
        cursor: 'pointer',
      },
    },
    createElement(
      'span',
      {
        style: {
          display: 'flex',
          height: '22px',
          border: '1px solid var(--dsw-alias-border-l1)',
        },
      },
      ...swatch.map((color) =>
        createElement('span', { key: color, style: { flex: '1 1 0', background: color } }),
      ),
    ),
    createElement(
      'span',
      { style: { color: 'var(--dsw-alias-label-primary)', fontSize: '13px' } },
      label,
    ),
    createElement(
      'span',
      { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: '12px' } },
      detail,
    ),
  )
}

/**
 * Render the CRT skin's Settings section.
 * @returns the section element.
 */
export function CrtSettingsPanel(): ReactElement {
  const [preferences, setPreferences] = useState<CrtPreferences>(getPreferences)

  useEffect(() => subscribePreferences(setPreferences), [])

  const onToggleEnabled = useCallback((next: boolean) => {
    updatePreferences({ enabled: next })
  }, [])

  const onToggleEffects = useCallback((next: boolean) => {
    updatePreferences({ effects: next })
  }, [])

  const onSelectScheme = useCallback((next: CrtScheme) => {
    selectScheme(next)
  }, [])

  return createElement(
    'div',
    { style: { display: 'grid', gap: '4px' } },
    createElement(
      'div',
      { style: { display: 'grid', borderBottom: '1px solid var(--dsw-alias-border-l1)' } },
      createElement(CrtToggleRow, {
        checked: preferences.enabled,
        detail: '关闭后立即恢复 DSH 原本的配色，面板保留可随时开启。',
        label: '启用 CRT 配色',
        onChange: onToggleEnabled,
      }),
      createElement(CrtToggleRow, {
        checked: preferences.effects,
        detail: '扫描线、暗角、栅格与磷光闪烁叠加层。',
        label: '硬件特效',
        onChange: onToggleEffects,
      }),
    ),
    createElement(
      'div',
      { style: { display: 'grid', gap: '8px', paddingTop: '14px' } },
      createElement(
        'span',
        { style: { color: 'var(--dsw-alias-label-primary)', fontSize: '13px' } },
        '配色方案',
      ),
      createElement(
        'div',
        { style: { display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' } },
        ...SCHEME_OPTIONS.map((option) =>
          createElement(CrtSchemeCard, {
            detail: option.detail,
            id: option.id,
            key: option.id,
            label: option.label,
            onSelect: onSelectScheme,
            selected: preferences.scheme === option.id,
            swatch: option.swatch,
          }),
        ),
      ),
    ),
  )
}
