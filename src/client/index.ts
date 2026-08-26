/**
 * dsh-crt-theme browser half: installs the DeepSeek CRT token layer through
 * the DSH theme service and runs the CRT hardware-effect layer (scanlines,
 * vignette, flicker) toggled by Ctrl/Cmd+Shift+Alt+C. Ctrl/Cmd+Shift+Alt+P
 * changes between the Unit-02 and Unit-01 CRT palettes.
 *
 * Both palettes are dark alias-token overrides that preserve their intended
 * surface regardless of DSH's underlying base preference. Effects are
 * plain CSS gated on `html.dsh-crt-active` (injected as a `<style
 * data-plugin-css>` tag by the build).
 * @module @dsh-external/dsh-crt-theme/client
 */
import type { Context } from '@deepseek-ai/cordis'
import { createElement, useId } from 'react'
import './crt.css'

/** Stable source id for the CRT theme's token override layer. */
export const THEME_ID = 'dsh-crt'

/** localStorage key persisting whether the hardware-effect layer is on. */
const EFFECTS_STORAGE_KEY = 'dsh-crt-theme:effects'

/** localStorage key persisting the selected CRT palette. */
const SCHEME_STORAGE_KEY = 'dsh-crt-theme:scheme'

/** Class gating every CRT overlay effect in crt.css. */
const ACTIVE_CLASS = 'dsh-crt-active'

/** Document attribute carrying the selected CRT palette to crt.css. */
const SCHEME_ATTRIBUTE = 'data-dsh-crt-scheme'

/** Copy shown in the blank conversation hero while the CRT skin is installed. */
const HERO_HEADLINE = 'DEEPSEEK、袭来'

/** Hero title owned by the conversation client, scoped by its root phase. */
const HERO_HEADLINE_SELECTOR = "[data-phase='hero'] [class*='_headlineText']"

/** Theme service required before this skin can install its palette layer. */
export const inject = ['theme', 'slots']

/**
 * Unit-02 CRT palette: black instruments with red structure, orange controls,
 * and amber signal ink.
 */
const UNIT02_TOKENS: Record<string, string> = {
  // Surfaces.
  '--dsw-alias-bg-base': '#030202',
  '--dsw-alias-bg-layer-1': '#080505',
  '--dsw-alias-bg-layer-2': '#100807',
  '--dsw-alias-bg-layer-3': '#180b07',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.72)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.86)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.94)',
  '--dsw-alias-bg-mask-drop': 'rgba(0, 0, 0, 0.82)',
  '--dsw-alias-bg-mask-photo': '#000000',
  '--dsw-alias-bg-module-platform': '#050303',
  '--dsw-alias-bg-multi-select': 'rgba(255, 176, 0, 0.12)',
  '--dsw-alias-bg-overlay': 'rgba(5, 2, 2, 0.96)',
  '--dsw-alias-bg-skeleton': '#180b07',
  // Borders.
  '--dsw-alias-border-inverted': '#3a0d0a',
  '--dsw-alias-border-inverted2': '#260806',
  '--dsw-alias-border-l1': '#2b0907',
  '--dsw-alias-border-l2': '#5f1510',
  '--dsw-alias-border-l2-darkmode-thin': '#3a0d0a',
  '--dsw-alias-border-l3': '#811b12',
  '--dsw-alias-border-l4': '#ff641f',
  // Brand.
  '--dsw-alias-brand-primary': '#ff641f',
  '--dsw-alias-brand-primary-invert': '#030202',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#ffb000',
  '--dsw-alias-brand-text': '#ffd36a',
  // Buttons.
  '--dsw-alias-button-contrast-fill': '#ff641f',
  '--dsw-alias-button-elevated-fill': '#180b07',
  '--dsw-alias-button-floating-fill': 'rgba(16, 8, 7, 0.94)',
  '--dsw-alias-button-floating-hover': 'rgba(58, 13, 10, 0.96)',
  '--dsw-alias-button-ghost-active-border': 'rgba(255, 100, 31, 0.64)',
  '--dsw-alias-button-ghost-active-fill': 'rgba(255, 176, 0, 0.12)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(255, 100, 31, 0.2)',
  '--dsw-alias-button-info-fill': 'rgba(255, 176, 0, 0.14)',
  '--dsw-alias-button-info-hover': 'rgba(255, 100, 31, 0.24)',
  '--dsw-alias-button-primary-dimmed': '#8b3917',
  '--dsw-alias-button-primary-fill': '#ff641f',
  '--dsw-alias-button-primary-hover': '#ff8a36',
  '--dsw-alias-button-tool-bar-fill': 'rgba(16, 8, 7, 0.86)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(16, 8, 7, 0.62)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(255, 100, 31, 0.14)',
  // Interactive states.
  '--dsw-alias-interactive-bg-active': 'rgba(255, 176, 0, 0.15)',
  '--dsw-alias-interactive-bg-hover': 'rgba(255, 100, 31, 0.08)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(255, 176, 0, 0.11)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 43, 36, 0.12)',
  '--dsw-alias-interactive-bg-hover-solid': 'rgba(255, 100, 31, 0.16)',
  // Labels.
  '--dsw-alias-label-caption': '#9f7257',
  '--dsw-alias-label-dimmed': '#684637',
  '--dsw-alias-label-primary': '#f6dfbd',
  '--dsw-alias-label-primary-bluish': '#f0cfa8',
  '--dsw-alias-label-primary-dimmed': '#c9a982',
  '--dsw-alias-label-primary-foreground': '#030202',
  '--dsw-alias-label-primary-inverted': '#180b07',
  '--dsw-alias-label-secondary': '#d0b694',
  '--dsw-alias-label-tertiary': '#9f7257',
  // Markdown.
  '--dsw-alias-markdown-citation': 'rgba(255, 205, 120, 0.1)',
  '--dsw-alias-markdown-code-block': '#080505',
  '--dsw-alias-markdown-code-block-banner': '#180b07',
  '--dsw-alias-markdown-code-segment-selected': 'rgba(255, 184, 77, 0.18)',
  '--dsw-alias-markdown-code-segment-unselected': 'rgba(255, 184, 77, 0.07)',
  '--dsw-alias-markdown-inline-code': 'rgba(255, 184, 77, 0.13)',
  '--dsw-alias-markdown-placeholder': '#66503b',
  '--dsw-alias-markdown-tag': 'rgba(255, 184, 77, 0.12)',
  // Scrollbars.
  '--dsw-alias-scrollbar-bg-l1': '#3a0d0a',
  '--dsw-alias-scrollbar-bg-l2': '#180b07',
  '--dsw-alias-scrollbar-hover-l1': '#811b12',
  '--dsw-alias-scrollbar-hover-l2': '#ff641f',
  // States.
  '--dsw-alias-state-business-primary': '#ffb000',
  '--dsw-alias-state-business-tertiary': 'rgba(255, 176, 0, 0.14)',
  '--dsw-alias-state-error-primary': '#ff2b24',
  '--dsw-alias-state-error-secondary': 'rgba(255, 43, 36, 0.14)',
  '--dsw-alias-state-success-primary': '#69ddb1',
  '--dsw-alias-state-success-secondary': 'rgba(105, 221, 177, 0.16)',
  '--dsw-alias-state-success-tertiary': 'rgba(105, 221, 177, 0.09)',
  '--dsw-alias-state-warn-label': '#ffb000',
  '--dsw-alias-state-warn-primary': '#ffb000',
  '--dsw-alias-state-warn-secondary': 'rgba(255, 176, 0, 0.16)',
  '--dsw-alias-state-warn-tertiary': 'rgba(255, 176, 0, 0.08)',
  // Overlays.
  '--dsw-alias-toast-bg': 'rgba(0, 0, 0, 0.97)',
  '--dsw-alias-tooltip-bg': '#3a0d0a',
  // DSH-specific surfaces.
  '--dsw-specific-bubble': '#080505',
  '--dsw-specific-bubble-highlight': '#180b07',
  '--dsw-specific-input-major': '#080505',
  '--dsw-specific-login-input': '#080505',
  '--dsw-specific-menu': '#080505',
  '--dsw-specific-selector': '#100807',
  '--dsw-specific-sidebar-fill': '#050303',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(255, 176, 0, 0.13)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#ffb000',
  '--dsw-specific-sidebar-nav-item-hover': 'rgba(255, 100, 31, 0.08)',
  '--dsw-specific-tip': 'rgba(255, 176, 0, 0.09)',
}

/** Unit-01 CRT palette: black-violet instruments with acid-green signal ink. */
const UNIT01_TOKENS: Record<string, string> = {
  ...UNIT02_TOKENS,
  // Surfaces.
  '--dsw-alias-bg-base': '#07050b',
  '--dsw-alias-bg-layer-1': '#0e0916',
  '--dsw-alias-bg-layer-2': '#171021',
  '--dsw-alias-bg-layer-3': '#21152f',
  '--dsw-alias-bg-mask-1': 'rgba(7, 5, 11, 0.74)',
  '--dsw-alias-bg-mask-2': 'rgba(7, 5, 11, 0.86)',
  '--dsw-alias-bg-mask-3': 'rgba(7, 5, 11, 0.94)',
  '--dsw-alias-bg-mask-drop': 'rgba(7, 5, 11, 0.84)',
  '--dsw-alias-bg-mask-photo': '#07050b',
  '--dsw-alias-bg-module-platform': '#0b0710',
  '--dsw-alias-bg-multi-select': 'rgba(167, 237, 40, 0.11)',
  '--dsw-alias-bg-overlay': 'rgba(14, 9, 22, 0.97)',
  '--dsw-alias-bg-skeleton': '#21152f',
  // Borders and brand signal.
  '--dsw-alias-border-inverted': '#2c123e',
  '--dsw-alias-border-inverted2': '#1d0d29',
  '--dsw-alias-border-l1': '#251032',
  '--dsw-alias-border-l2': '#3d1954',
  '--dsw-alias-border-l2-darkmode-thin': '#2c123e',
  '--dsw-alias-border-l3': '#5c2680',
  '--dsw-alias-border-l4': '#a948da',
  '--dsw-alias-brand-primary': '#a7ed28',
  '--dsw-alias-brand-primary-invert': '#07050b',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#caff64',
  '--dsw-alias-brand-text': '#caff64',
  // Buttons and interaction.
  '--dsw-alias-button-contrast-fill': '#a7ed28',
  '--dsw-alias-button-elevated-fill': '#171021',
  '--dsw-alias-button-floating-fill': 'rgba(23, 16, 33, 0.94)',
  '--dsw-alias-button-floating-hover': 'rgba(44, 18, 62, 0.98)',
  '--dsw-alias-button-ghost-active-border': 'rgba(167, 237, 40, 0.62)',
  '--dsw-alias-button-ghost-active-fill': 'rgba(167, 237, 40, 0.1)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(169, 72, 218, 0.18)',
  '--dsw-alias-button-info-fill': 'rgba(167, 237, 40, 0.14)',
  '--dsw-alias-button-info-hover': 'rgba(167, 237, 40, 0.22)',
  '--dsw-alias-button-primary-dimmed': '#60851f',
  '--dsw-alias-button-primary-fill': '#a7ed28',
  '--dsw-alias-button-primary-hover': '#caff64',
  '--dsw-alias-button-tool-bar-fill': 'rgba(23, 16, 33, 0.9)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(23, 16, 33, 0.66)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(169, 72, 218, 0.12)',
  '--dsw-alias-interactive-bg-active': 'rgba(167, 237, 40, 0.13)',
  '--dsw-alias-interactive-bg-hover': 'rgba(169, 72, 218, 0.09)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(167, 237, 40, 0.1)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 106, 31, 0.12)',
  '--dsw-alias-interactive-bg-hover-solid': 'rgba(169, 72, 218, 0.16)',
  // Labels and content.
  '--dsw-alias-label-caption': '#9c8cac',
  '--dsw-alias-label-dimmed': '#62556f',
  '--dsw-alias-label-primary': '#e9e5d7',
  '--dsw-alias-label-primary-bluish': '#d8d3c6',
  '--dsw-alias-label-primary-dimmed': '#b8aec0',
  '--dsw-alias-label-primary-foreground': '#07050b',
  '--dsw-alias-label-primary-inverted': '#171021',
  '--dsw-alias-label-secondary': '#c3bac7',
  '--dsw-alias-label-tertiary': '#9c8cac',
  '--dsw-alias-markdown-citation': 'rgba(167, 237, 40, 0.08)',
  '--dsw-alias-markdown-code-block': '#0e0916',
  '--dsw-alias-markdown-code-block-banner': '#21152f',
  '--dsw-alias-markdown-code-segment-selected': 'rgba(167, 237, 40, 0.13)',
  '--dsw-alias-markdown-code-segment-unselected': 'rgba(169, 72, 218, 0.07)',
  '--dsw-alias-markdown-inline-code': 'rgba(169, 72, 218, 0.12)',
  '--dsw-alias-markdown-placeholder': '#62556f',
  '--dsw-alias-markdown-tag': 'rgba(167, 237, 40, 0.09)',
  // Peripheral surfaces and states.
  '--dsw-alias-scrollbar-bg-l1': '#2c123e',
  '--dsw-alias-scrollbar-bg-l2': '#171021',
  '--dsw-alias-scrollbar-hover-l1': '#5c2680',
  '--dsw-alias-scrollbar-hover-l2': '#a948da',
  '--dsw-alias-state-business-primary': '#a7ed28',
  '--dsw-alias-state-business-tertiary': 'rgba(167, 237, 40, 0.12)',
  '--dsw-alias-state-error-primary': '#ff6a1f',
  '--dsw-alias-state-error-secondary': 'rgba(255, 106, 31, 0.13)',
  '--dsw-alias-state-success-primary': '#76e7c7',
  '--dsw-alias-state-success-secondary': 'rgba(118, 231, 199, 0.14)',
  '--dsw-alias-state-success-tertiary': 'rgba(118, 231, 199, 0.08)',
  '--dsw-alias-state-warn-label': '#f0c838',
  '--dsw-alias-state-warn-primary': '#f0c838',
  '--dsw-alias-state-warn-secondary': 'rgba(240, 200, 56, 0.13)',
  '--dsw-alias-state-warn-tertiary': 'rgba(240, 200, 56, 0.07)',
  '--dsw-alias-toast-bg': 'rgba(14, 9, 22, 0.98)',
  '--dsw-alias-tooltip-bg': '#2c123e',
  '--dsw-specific-bubble': '#0e0916',
  '--dsw-specific-bubble-highlight': '#21152f',
  '--dsw-specific-input-major': '#0e0916',
  '--dsw-specific-login-input': '#0e0916',
  '--dsw-specific-menu': '#0e0916',
  '--dsw-specific-selector': '#171021',
  '--dsw-specific-sidebar-fill': '#0b0710',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(167, 237, 40, 0.11)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#a7ed28',
  '--dsw-specific-sidebar-nav-item-hover': 'rgba(169, 72, 218, 0.09)',
  '--dsw-specific-tip': 'rgba(167, 237, 40, 0.08)',
}

/** Names of the visual schemes supplied by this skin. */
type CrtScheme = 'unit02' | 'unit01'

/** Current scheme names plus the two pre-EVA aliases accepted by the local API. */
type CrtSchemeInput = CrtScheme | 'amber' | 'violet'

/** Palette tokens keyed by the user-selectable CRT scheme. */
const SCHEME_TOKENS: Readonly<Record<CrtScheme, Record<string, string>>> = {
  unit02: UNIT02_TOKENS,
  unit01: UNIT01_TOKENS,
}

/** Convert one scheme to the theme service's mandatory light/dark override form. */
function schemeOverrides(scheme: CrtScheme): Record<string, { light: string; dark: string }> {
  return Object.fromEntries(
    Object.entries(SCHEME_TOKENS[scheme]).map(([name, value]) => [name, { light: value, dark: value }]),
  )
}

/** Resolve current and legacy public inputs to one stored scheme name. */
function normalizeScheme(scheme: CrtSchemeInput): CrtScheme {
  return scheme === 'unit01' || scheme === 'violet' ? 'unit01' : 'unit02'
}

/** Minimal theme face needed by this package's dynamic client half. */
interface CrtThemeService {
  /** Install a caller-owned token layer and return its disposer. */
  overrideTokens(source: string, tokens: Record<string, { light: string; dark: string }>): () => void
}

/** Props supplied by the conversation hero's brand-mark slot. */
interface CrtHeroBrandMarkProps {
  /** Square mark dimension in CSS pixels. */
  readonly size: number
  /** Component-owned class carrying the hero mark's placement. */
  readonly className?: string
}

/** Minimal slots face used by this self-contained browser skin. */
interface CrtSlotsService {
  /** Register a component at a named client UI slot. */
  register(spec: { name: string }, component: (props: CrtHeroBrandMarkProps) => unknown): unknown
  /** Install slot registrations when their host package is ready. */
  inject(slotName: string, install: () => unknown): void
}

/** Original text and label retained while the skin owns a hero title element. */
interface HeroTitleState {
  /** Text rendered by DSH before the skin replaced it. */
  readonly text: string
  /** Original accessible label, when the host supplied one. */
  readonly ariaLabel: string | null
}

/** Official DeepSeek fish silhouette used as the clip for the CRT scan stripes. */
const CRT_WHALE_PATH = 'M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z'

/**
 * Render a flat CRT whale for the sidebar and blank-session brand slots.
 * @param props - placement supplied by the owning DSH surface.
 * @returns an accessible-decorative terminal whale icon.
 */
function CrtWhaleMark({ size, className }: CrtHeroBrandMarkProps): ReturnType<typeof createElement> {
  const instanceId = useId().replaceAll(':', '')
  const silhouetteId = `dsh-crt-whale-${instanceId}`
  const stripeId = `${silhouetteId}-stripes`

  return createElement(
    'svg',
    {
      'aria-hidden': true,
      className,
      'data-crt-whale-mark': 'true',
      focusable: 'false',
      height: (size * 17.04) / 23.16,
      viewBox: '-0.6 -0.6 24.36 18.24',
      width: size,
    },
    createElement(
      'defs',
      null,
      createElement(
        'pattern',
        { id: stripeId, patternUnits: 'userSpaceOnUse', width: 24, height: 2.05 },
        createElement('rect', { fill: 'currentColor', height: 1.18, width: 24 }),
        createElement('rect', { fill: 'currentColor', height: 0.18, opacity: 0.34, width: 24, y: 1.54 }),
      ),
      createElement('path', { d: CRT_WHALE_PATH, id: silhouetteId }),
    ),
    createElement('use', { fill: `url(#${stripeId})`, href: `#${silhouetteId}` }),
    createElement('use', {
      fill: 'none',
      href: `#${silhouetteId}`,
      opacity: 0.78,
      stroke: 'currentColor',
      strokeLinejoin: 'miter',
      strokeWidth: 0.24,
    }),
    createElement('path', {
      d: 'M0.35 16.92H7.15M15.2 16.92h5.7M0.35 16.45h3.5',
      fill: 'none',
      opacity: 0.56,
      stroke: 'currentColor',
      strokeWidth: 0.22,
    }),
  )
}

/** Read the persisted effects preference; missing storage defaults to on. */
function effectsEnabled(): boolean {
  try {
    const stored = localStorage.getItem(EFFECTS_STORAGE_KEY)
    if (stored !== null) return stored !== '0'
  } catch {
    // Storage may be unavailable in embedded contexts; default to on.
  }
  return true
}

/** Persist the effects preference (best effort). */
function persistEffects(enabled: boolean): void {
  try {
    localStorage.setItem(EFFECTS_STORAGE_KEY, enabled ? '1' : '0')
  } catch {
    // Ignore storage errors — the in-memory class still applies this load.
  }
}

/** Read the last selected palette; legacy names migrate to their EVA successors. */
function persistedScheme(): CrtScheme {
  try {
    const stored = localStorage.getItem(SCHEME_STORAGE_KEY)
    return normalizeScheme(stored === 'unit01' || stored === 'violet' || stored === 'amber' ? stored : 'unit02')
  } catch {
    // Storage may be unavailable in embedded contexts; Unit-02 is still usable.
  }
  return 'unit02'
}

/** Persist the selected palette (best effort). */
function persistScheme(scheme: CrtScheme): void {
  try {
    localStorage.setItem(SCHEME_STORAGE_KEY, scheme)
  } catch {
    // Ignore storage errors — the in-memory palette still applies this load.
  }
}

/** The public toggle API, matching the standalone crt.js surface. */
interface CrtApi {
  enable(): void
  disable(): void
  toggle(): void
  isActive(): boolean
  getScheme(): CrtScheme
  setScheme(scheme: CrtSchemeInput): void
  toggleScheme(): void
  version: string
}

/**
 * Activate the browser half: install the CRT token layer, effect layer, and
 * keyboard shortcut. Everything unwinds on dispose.
 * @param ctx - plugin context.
 */
export function apply(ctx: Context): void {
  const theme = ctx.get('theme') as CrtThemeService | undefined
  const slots = ctx.get('slots') as CrtSlotsService | undefined
  if (theme === undefined || slots === undefined) return

  // Dynamic client packages own one override layer. Re-applying this source
  // replaces the prior palette atomically; unloading restores DSH tokens.
  let scheme = persistedScheme()
  const applyScheme = (next: CrtScheme): void => {
    scheme = next
    persistScheme(scheme)
    document.documentElement.setAttribute(SCHEME_ATTRIBUTE, scheme)
    theme.overrideTokens(THEME_ID, schemeOverrides(scheme))
  }
  applyScheme(scheme)

  // The icon has official sidebar and hero slots. The title does not, so
  // retain and restore the host's text while the skin owns the headline.
  slots.inject('sidebar.brand.mark', () =>
    slots.inject('conversation.hero.brand.mark', function* () {
      yield slots.register({ name: 'sidebar.brand.mark' }, CrtWhaleMark)
      yield slots.register({ name: 'conversation.hero.brand.mark' }, CrtWhaleMark)
    }))

  const heroTitles = new Map<HTMLElement, HeroTitleState>()
  const applyHeroHeadline = (): void => {
    for (const title of document.querySelectorAll<HTMLElement>(HERO_HEADLINE_SELECTOR)) {
      if (!heroTitles.has(title)) {
        heroTitles.set(title, { ariaLabel: title.getAttribute('aria-label'), text: title.textContent ?? '' })
      }
      if (title.textContent !== HERO_HEADLINE) title.textContent = HERO_HEADLINE
      title.setAttribute('aria-label', HERO_HEADLINE)
    }
  }
  applyHeroHeadline()
  const headlineObserver = new MutationObserver(applyHeroHeadline)
  headlineObserver.observe(document.body, { characterData: true, childList: true, subtree: true })

  // Hardware-effect layer (scanlines, vignette, flicker) + toggle shortcut.
  let active = effectsEnabled()
  const applyActive = (): void => {
    document.documentElement.classList.toggle(ACTIVE_CLASS, active)
  }
  applyActive()

  const setActive = (next: boolean): void => {
    active = next
    persistEffects(active)
    applyActive()
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.altKey && event.code === 'KeyC') {
      event.preventDefault()
      setActive(!active)
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.altKey && event.code === 'KeyP') {
      event.preventDefault()
      applyScheme(scheme === 'unit02' ? 'unit01' : 'unit02')
    }
  }
  document.addEventListener('keydown', onKeyDown)

  const api: CrtApi = {
    enable: () => setActive(true),
    disable: () => setActive(false),
    toggle: () => setActive(!active),
    isActive: () => active,
    getScheme: () => scheme,
    setScheme: (next) => applyScheme(normalizeScheme(next)),
    toggleScheme: () => applyScheme(scheme === 'unit02' ? 'unit01' : 'unit02'),
    version: '0.8.1',
  }
  ;(window as { DSHCRT?: CrtApi }).DSHCRT = api

  ctx.effect(() => () => {
    headlineObserver.disconnect()
    for (const [title, { ariaLabel, text }] of heroTitles) {
      if (!title.isConnected) continue
      title.textContent = text
      if (ariaLabel === null) title.removeAttribute('aria-label')
      else title.setAttribute('aria-label', ariaLabel)
    }
    document.removeEventListener('keydown', onKeyDown)
    if ((window as { DSHCRT?: CrtApi }).DSHCRT === api) {
      delete (window as { DSHCRT?: CrtApi }).DSHCRT
    }
    document.documentElement.classList.remove(ACTIVE_CLASS)
    document.documentElement.removeAttribute(SCHEME_ATTRIBUTE)
  })
}
