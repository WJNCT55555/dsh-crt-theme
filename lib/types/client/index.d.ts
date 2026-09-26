/**
 * dsh-crt-theme browser half: installs the DeepSeek CRT token layer through
 * the DSH theme service, runs the CRT hardware-effect layer (scanlines,
 * vignette, flicker), and contributes the skin's panel to DSH Settings.
 *
 * The Settings panel owns both switches — the CRT color scheme and the
 * hardware-effect layer — plus the palette picker; the panel's own row keeps
 * working while the color scheme is off, because only the token layer is
 * released, never the panel. Ctrl/Cmd+Shift+Alt+C and Ctrl/Cmd+Shift+Alt+P
 * remain as shortcuts over the same preferences.
 *
 * Both palettes are dark alias-token overrides that preserve their intended
 * surface regardless of DSH's underlying base preference. Effects are
 * plain CSS gated on `html.dsh-crt-active` (injected as a `<style
 * data-plugin-css>` tag by the build).
 * @module @dsh-external/dsh-crt-theme/client
 */
import type { Context } from '@deepseek-ai/cordis';
import './crt.css';
/** Stable source id for the CRT theme's token override layer. */
export declare const THEME_ID = "dsh-crt";
/** Theme service required before this skin can install its palette layer. */
export declare const inject: string[];
/**
 * Activate the browser half: install the CRT token layer, effect layer, and
 * keyboard shortcut. Everything unwinds on dispose.
 * @param ctx - plugin context.
 */
export declare function apply(ctx: Context): void;
