window.__ModuleLoader__.load({
	id: "@dsh-external/dsh-crt-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		//#region \0dsh-css:D:\deepseek\dsh-crt-theme\src\client\crt.css.mjs
		const css = ":root {\n  --crt-deepseek-blue: #ff641f;\n  --crt-signal-cyan: #69ddb1;\n  --crt-phosphor-ice: #f6dfbd;\n  --crt-alert-amber: #ff2b24;\n  --crt-instrument-amber: #ffb000;\n  --crt-instrument-orange: #ff641f;\n  --crt-meter-track: #422016;\n  --crt-meter-base: #170806;\n  --crt-meter-highlight: #ffd36a;\n  --crt-meter-edge: #ff641f;\n  --crt-critical-red: #ff2b24;\n  --crt-restricted-violet: #a948da;\n  --crt-ink: #030202;\n  --crt-gunmetal: #080505;\n  --crt-line: #811b12;\n  --crt-control-fill: #080505;\n  --crt-control-hover: #100807;\n  --crt-control-active: #180b07;\n  --crt-accent-bright: #ffd36a;\n  --crt-accent-hover: #ff641f;\n  --crt-muted-label: #9f7257;\n  --crt-input-fill: rgba(8, 5, 5, 0.94);\n  --crt-input-shadow: rgba(0, 0, 0, 0.32);\n  --crt-focus-ring: rgba(255, 176, 0, 0.25);\n  --crt-focus-glow: rgba(255, 100, 31, 0.24);\n  --crt-row-hover: rgba(255, 100, 31, 0.1);\n  --crt-row-selected: rgba(255, 176, 0, 0.13);\n  --crt-selection-foreground: #030202;\n  --crt-link-hover: #ffd36a;\n  --crt-scanline-color: rgba(255, 176, 0, 0.36);\n  --crt-grille-color: rgba(255, 176, 0, 0.018);\n  --crt-vignette-mid: rgba(0, 0, 0, 0.28);\n  --crt-vignette-edge: rgba(0, 0, 0, 0.72);\n  --crt-dialog-bg: #030202;\n  --crt-dialog-panel: #080505;\n  --crt-dialog-card: #180b07;\n  --crt-dialog-line: rgba(255, 100, 31, 0.44);\n  --crt-dialog-line-strong: rgba(255, 176, 0, 0.74);\n  --crt-dialog-muted: #d0b694;\n  --crt-dialog-faint: #9f7257;\n  --crt-dialog-meter-shadow: rgba(255, 100, 31, 0.4);\n  --crt-scanline-opacity: 0.075;\n  --crt-vignette-opacity: 0.62;\n}\n\n/* Unit-01 palette: violet structure, acid-green signal ink, and orange alerts. */\nhtml[data-dsh-crt-scheme='unit01'] {\n  --crt-deepseek-blue: #a948da;\n  --crt-signal-cyan: #76e7c7;\n  --crt-phosphor-ice: #e9e5d7;\n  --crt-alert-amber: #ff6a1f;\n  --crt-instrument-amber: #a7ed28;\n  --crt-instrument-orange: #a948da;\n  --crt-meter-track: #281a35;\n  --crt-meter-base: #100a18;\n  --crt-meter-highlight: #caff64;\n  --crt-meter-edge: #a948da;\n  --crt-critical-red: #ff6a1f;\n  --crt-restricted-violet: #a948da;\n  --crt-ink: #07050b;\n  --crt-gunmetal: #0e0916;\n  --crt-line: #5c2680;\n  --crt-control-fill: #0e0916;\n  --crt-control-hover: #171021;\n  --crt-control-active: #21152f;\n  --crt-accent-bright: #caff64;\n  --crt-accent-hover: #a948da;\n  --crt-muted-label: #9c8cac;\n  --crt-input-fill: rgba(14, 9, 22, 0.94);\n  --crt-input-shadow: rgba(7, 5, 11, 0.34);\n  --crt-focus-ring: rgba(167, 237, 40, 0.24);\n  --crt-focus-glow: rgba(167, 237, 40, 0.18);\n  --crt-row-hover: rgba(169, 72, 218, 0.11);\n  --crt-row-selected: rgba(167, 237, 40, 0.11);\n  --crt-selection-foreground: #07050b;\n  --crt-link-hover: #caff64;\n  --crt-scanline-color: rgba(167, 237, 40, 0.24);\n  --crt-grille-color: rgba(169, 72, 218, 0.024);\n  --crt-vignette-mid: rgba(7, 5, 11, 0.26);\n  --crt-vignette-edge: rgba(7, 5, 11, 0.7);\n  --crt-dialog-bg: #07050b;\n  --crt-dialog-panel: #0e0916;\n  --crt-dialog-card: #21152f;\n  --crt-dialog-line: rgba(169, 72, 218, 0.42);\n  --crt-dialog-line-strong: rgba(167, 237, 40, 0.7);\n  --crt-dialog-muted: #c3bac7;\n  --crt-dialog-faint: #9c8cac;\n  --crt-dialog-meter-shadow: rgba(167, 237, 40, 0.24);\n  --crt-scanline-opacity: 0.065;\n  --crt-vignette-opacity: 0.58;\n}\n\nhtml.dsh-crt-active,\nhtml.dsh-crt-active body {\n  background: var(--crt-ink) !important;\n}\n\nhtml.dsh-crt-active body {\n  color: var(--crt-phosphor-ice);\n  background-image: none;\n  font-family: \"Orbitron\", \"Bahnschrift SemiCondensed\", \"Arial Narrow\", \"Cascadia Mono\", \"Microsoft YaHei UI\", sans-serif;\n  font-stretch: condensed;\n  letter-spacing: 0.025em;\n}\n\nhtml.dsh-crt-active button,\nhtml.dsh-crt-active input,\nhtml.dsh-crt-active textarea,\nhtml.dsh-crt-active select,\nhtml.dsh-crt-active [role='tab'] {\n  box-sizing: border-box;\n  font-family: \"Orbitron\", \"Bahnschrift SemiCondensed\", \"Arial Narrow\", \"Cascadia Mono\", \"Microsoft YaHei UI\", sans-serif !important;\n  font-stretch: condensed;\n  letter-spacing: 0.02em;\n}\n\nhtml.dsh-crt-active input,\nhtml.dsh-crt-active textarea,\nhtml.dsh-crt-active select {\n  border-radius: 1px !important;\n}\n\n/* Primary shell controls use one small cut corner; DSH keeps their native dimensions. */\nhtml.dsh-crt-active button[class*='_newSession'] {\n  border-color: var(--crt-instrument-orange) !important;\n  border-radius: 0 !important;\n  clip-path: polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%);\n}\n\n/* Branding and session rows are navigation text, never framed controls. */\nhtml.dsh-crt-active button[class*='_brand'],\nhtml.dsh-crt-active [role='treeitem'] {\n  border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  text-shadow: none;\n}\n\nhtml.dsh-crt-active button[class*='_brand']:hover,\nhtml.dsh-crt-active button[class*='_brand']:focus-visible {\n  color: var(--crt-instrument-amber) !important;\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  text-shadow: none;\n}\n\nhtml.dsh-crt-active [role='treeitem']:hover,\nhtml.dsh-crt-active [role='treeitem'][aria-selected='true'] {\n  border: 0 !important;\n  border-radius: 0 !important;\n  background: linear-gradient(90deg, var(--crt-row-hover) 0 74%, transparent 100%) !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active [role='treeitem'][aria-selected='true'] {\n  background: linear-gradient(90deg, var(--crt-row-selected) 0 74%, transparent 100%) !important;\n  box-shadow: inset 2px 0 var(--crt-instrument-amber) !important;\n}\n\n/* Compact icon controls retain their component-owned dimensions and shape. */\nhtml.dsh-crt-active button[class*='_iconButton'],\nhtml.dsh-crt-active button[class*='_searchButton'],\nhtml.dsh-crt-active button[class*='_toggle'],\nhtml.dsh-crt-active button[class*='_add'],\nhtml.dsh-crt-active button[class*='_close'],\nhtml.dsh-crt-active button:has(> svg:only-child) {\n  border-color: transparent !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active button[class*='_iconButton']:hover:not(:disabled),\nhtml.dsh-crt-active button[class*='_searchButton']:hover:not(:disabled),\nhtml.dsh-crt-active button[class*='_toggle']:hover:not(:disabled),\nhtml.dsh-crt-active button[class*='_add']:hover:not(:disabled),\nhtml.dsh-crt-active button[class*='_close']:hover:not(:disabled),\nhtml.dsh-crt-active button:has(> svg:only-child):hover:not(:disabled) {\n  color: var(--crt-instrument-amber) !important;\n  border-color: transparent !important;\n  background: var(--crt-row-hover) !important;\n}\n\n/* Conversation views are state labels, not push buttons. */\nhtml.dsh-crt-active button[role='tab'] {\n  position: relative;\n  padding: 0 8px 11px !important;\n  border: 0 !important;\n  background: transparent !important;\n  color: var(--crt-muted-label) !important;\n  box-shadow: none !important;\n  font-weight: 600;\n  text-shadow: none;\n}\n\nhtml.dsh-crt-active button[role='tab']::before {\n  position: absolute;\n  bottom: 3px;\n  left: 0;\n  width: 3px;\n  height: 13px;\n  content: '';\n  background: transparent;\n}\n\nhtml.dsh-crt-active button[role='tab']::after {\n  right: 0;\n  bottom: 1px;\n  left: 0;\n  height: 2px;\n  background: transparent !important;\n}\n\nhtml.dsh-crt-active button[role='tab']:hover,\nhtml.dsh-crt-active button[role='tab']:focus-visible {\n  color: var(--crt-accent-bright) !important;\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active button[role='tab'][aria-selected='true'] {\n  color: var(--crt-instrument-amber) !important;\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  text-shadow: 0 0 4px color-mix(in srgb, var(--crt-instrument-amber) 62%, transparent);\n}\n\nhtml.dsh-crt-active button[role='tab'][aria-selected='true']::before,\nhtml.dsh-crt-active button[role='tab'][aria-selected='true']::after {\n  background: var(--crt-instrument-amber) !important;\n}\n\nhtml.dsh-crt-active input,\nhtml.dsh-crt-active textarea,\nhtml.dsh-crt-active select {\n  color: var(--crt-phosphor-ice) !important;\n  border-color: color-mix(in srgb, var(--crt-instrument-amber) 66%, transparent) !important;\n  background: var(--crt-input-fill) !important;\n  box-shadow: inset 0 0 16px var(--crt-input-shadow);\n}\n\n/* The caret layer, visible glyph layer, and height mirror require identical text metrics. */\nhtml.dsh-crt-active [class*='_card']:has(textarea[class*='_input'])\n  :is(textarea[class*='_input'], [class*='_backdrop'], [class*='_mirror']) {\n  font-family: var(--dsw-font-family) !important;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\n\n/* DSH paints composer glyphs in the backdrop below a transparent textarea. */\nhtml.dsh-crt-active [class*='_card']:has(textarea[class*='_input']) textarea[class*='_input'] {\n  color: transparent !important;\n  -webkit-text-fill-color: transparent !important;\n  caret-color: var(--crt-instrument-amber) !important;\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active [class*='_card']:has(textarea[class*='_input']) [class*='_backdrop'] {\n  color: var(--crt-phosphor-ice) !important;\n}\n\nhtml.dsh-crt-active [class*='_card']:has(textarea[class*='_input']) [class*='_hint'] {\n  color: var(--crt-muted-label) !important;\n}\n\nhtml.dsh-crt-active input::placeholder,\nhtml.dsh-crt-active textarea::placeholder {\n  color: var(--crt-muted-label) !important;\n  -webkit-text-fill-color: var(--crt-muted-label) !important;\n  opacity: 1;\n}\n\nhtml.dsh-crt-active input:focus,\nhtml.dsh-crt-active textarea:not([class*='_input']):focus,\nhtml.dsh-crt-active select:focus {\n  border-color: var(--crt-instrument-amber) !important;\n  box-shadow: inset 0 0 16px var(--crt-input-shadow), 0 0 0 1px var(--crt-focus-ring), 0 0 14px var(--crt-focus-glow) !important;\n}\n\nhtml.dsh-crt-active input[type='checkbox'],\nhtml.dsh-crt-active input[type='radio'] {\n  accent-color: var(--crt-instrument-amber);\n}\n\n/* The composer remains DSH's one input surface, rendered as a cut-corner instrument. */\nhtml.dsh-crt-active [class*='_card']:has(textarea[class*='_input']) {\n  border-color: var(--crt-instrument-orange) !important;\n  border-radius: 0 !important;\n  background: var(--crt-input-fill) !important;\n  clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px));\n  box-shadow: inset 0 0 18px var(--crt-input-shadow), 0 0 12px var(--crt-focus-glow) !important;\n}\n\n/* Task and completion tracks use the requested narrow diagonal CRT fill. */\nhtml.dsh-crt-active progress,\nhtml.dsh-crt-active [role='progressbar'] {\n  box-sizing: border-box;\n  min-height: 6px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 0 !important;\n  background: var(--crt-meter-track);\n  box-shadow: 0 0 5px var(--crt-focus-glow);\n}\n\nhtml.dsh-crt-active progress::-webkit-progress-bar {\n  background: var(--crt-meter-track);\n}\n\nhtml.dsh-crt-active progress::-webkit-progress-value {\n  background: repeating-linear-gradient(135deg, var(--crt-meter-highlight) 0 1px, var(--crt-meter-edge) 1px 2px, transparent 2px 3px);\n}\n\nhtml.dsh-crt-active [role='progressbar'] > * {\n  background: repeating-linear-gradient(135deg, var(--crt-meter-highlight) 0 1px, var(--crt-meter-edge) 1px 2px, transparent 2px 3px) !important;\n}\n\n/* Context occupancy keeps its semantic colors and resolves them into dense 3px cells. */\nhtml.dsh-crt-active span[class*='_root']:has(button[class*='_trigger'] svg circle) div[class*='_bar'] {\n  gap: 0 !important;\n  height: 9px !important;\n  border-radius: 0 !important;\n  background: repeating-linear-gradient(90deg, var(--crt-meter-track) 0 3px, transparent 3px 4px) !important;\n}\n\nhtml.dsh-crt-active span[class*='_root']:has(button[class*='_trigger'] svg circle) div[class*='_segment'] {\n  min-width: 0 !important;\n  border-radius: 0 !important;\n  background: repeating-linear-gradient(90deg, var(--meter-tint, var(--crt-instrument-amber)) 0 3px, transparent 3px 4px) !important;\n  box-shadow: 0 0 4px color-mix(in srgb, var(--meter-tint, var(--crt-instrument-amber)) 38%, transparent);\n}\n\nhtml.dsh-crt-active span[class*='_root']:has(button[class*='_trigger'] svg circle) circle[class*='_track'] {\n  stroke: var(--crt-line) !important;\n}\n\nhtml.dsh-crt-active span[class*='_root']:has(button[class*='_trigger'] svg circle) circle[class*='_fill'] {\n  stroke: var(--crt-instrument-amber) !important;\n}\n\nhtml.dsh-crt-active [role='dialog'] {\n  border-radius: 1px !important;\n  border: 2px solid var(--crt-instrument-amber) !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active ::selection {\n  color: var(--crt-selection-foreground);\n  background: var(--crt-instrument-amber);\n}\n\nhtml.dsh-crt-active a {\n  color: var(--crt-instrument-amber);\n  text-underline-offset: 0.18em;\n}\n\nhtml.dsh-crt-active a:hover {\n  color: var(--crt-link-hover);\n}\n\n/* The blank-session hero is the CRT boot screen, not a generic product card. */\nhtml.dsh-crt-active [data-phase='hero'] [class*='_headlineText'] {\n  color: var(--crt-instrument-amber) !important;\n  font-family: \"Orbitron\", \"Bahnschrift SemiCondensed\", \"Arial Narrow\", \"Cascadia Mono\", \"Microsoft YaHei UI\", sans-serif !important;\n  font-stretch: condensed;\n  font-weight: 700;\n  letter-spacing: 0.075em;\n  text-shadow: 0 0 5px color-mix(in srgb, var(--crt-instrument-amber) 58%, transparent);\n}\n\nhtml.dsh-crt-active [data-crt-whale-mark='true'] {\n  color: var(--crt-instrument-amber);\n  overflow: visible;\n  filter:\n    drop-shadow(0 0 2px color-mix(in srgb, var(--crt-instrument-orange) 48%, transparent))\n    drop-shadow(0 0 5px color-mix(in srgb, var(--crt-instrument-amber) 24%, transparent));\n}\n\n/* Physical display effects never catch input. */\nhtml.dsh-crt-active body::before,\nhtml.dsh-crt-active body::after {\n  position: fixed;\n  z-index: 2147483646;\n  inset: 0;\n  pointer-events: none;\n  content: '';\n}\n\nhtml.dsh-crt-active body::before {\n  opacity: var(--crt-scanline-opacity);\n  background: repeating-linear-gradient(to bottom, var(--crt-scanline-color) 0, var(--crt-scanline-color) 1px, transparent 1px, transparent 4px);\n  mix-blend-mode: screen;\n}\n\nhtml.dsh-crt-active body::after {\n  z-index: 2147483647;\n  opacity: var(--crt-vignette-opacity);\n  background:\n    radial-gradient(ellipse at center, transparent 43%, var(--crt-vignette-mid) 76%, var(--crt-vignette-edge) 100%),\n    repeating-linear-gradient(90deg, var(--crt-grille-color) 0 1px, transparent 1px 3px);\n}\n\nhtml.dsh-crt-active.dsh-crt-flicker body {\n  animation: dsh-crt-phosphor 7s steps(1, end) infinite;\n}\n\n/* dsh-achievements keeps its own semantic layout; only its visual tokens are bridged. */\nhtml.dsh-crt-active [role='dialog'] [class*='_section'] {\n  --retro-bg: var(--crt-dialog-bg);\n  --retro-panel: var(--crt-dialog-panel);\n  --retro-card: var(--crt-dialog-card);\n  --retro-line: var(--crt-dialog-line);\n  --retro-line-strong: var(--crt-dialog-line-strong);\n  --retro-emerald: var(--crt-instrument-amber);\n  --retro-emerald-dim: var(--crt-accent-bright);\n  --retro-emerald-deep: var(--crt-instrument-orange);\n  --retro-text: var(--crt-phosphor-ice);\n  --retro-muted: var(--crt-dialog-muted);\n  --retro-faint: var(--crt-dialog-faint);\n  --retro-amber: var(--crt-alert-amber);\n  --retro-glow: 0 0 4px color-mix(in srgb, var(--crt-instrument-amber) 28%, transparent);\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_panel'] {\n  border-color: var(--crt-instrument-amber) !important;\n  background: color-mix(in srgb, var(--crt-dialog-bg) 96%, transparent) !important;\n  box-shadow: none !important;\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_section'] [class*='_corner'] {\n  color: var(--crt-instrument-amber) !important;\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_section'] [class*='_title'],\nhtml.dsh-crt-active [role='dialog'] [class*='_section'] [class*='_kicker'] {\n  color: var(--crt-instrument-amber) !important;\n  text-shadow: 0 0 9px color-mix(in srgb, var(--crt-instrument-amber) 42%, transparent);\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_section'] [class*='_close']:hover {\n  color: var(--crt-alert-amber) !important;\n  border-color: var(--crt-alert-amber) !important;\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_section']::-webkit-scrollbar-thumb {\n  border-color: var(--crt-instrument-amber);\n  background: color-mix(in srgb, var(--crt-instrument-orange) 62%, transparent);\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_rarityBar'],\nhtml.dsh-crt-active [role='dialog'] [class*='_groupProgress'],\nhtml.dsh-crt-active [role='dialog'] [class*='_bar']:not([class*='_barFill']):not([class*='_barTicks']):not([class*='_barWrap']):not([class*='_barLabel']),\nhtml.dsh-crt-active [role='dialog'] [class*='_railMeter'],\nhtml.dsh-crt-active [role='dialog'] [class*='_hbarTrack'] {\n  border-color: transparent !important;\n  border-radius: 0 !important;\n  background: var(--crt-meter-track) !important;\n  box-shadow: 0 0 5px var(--crt-focus-glow);\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_rarityBarSegment'],\nhtml.dsh-crt-active [role='dialog'] [class*='_groupProgress'] > div,\nhtml.dsh-crt-active [role='dialog'] [class*='_barFill'],\nhtml.dsh-crt-active [role='dialog'] [class*='_railMeter'] > span,\nhtml.dsh-crt-active [role='dialog'] [class*='_hbarFill'] {\n  background: repeating-linear-gradient(135deg, var(--crt-meter-highlight) 0 1px, var(--crt-meter-edge) 1px 2px, transparent 2px 3px) !important;\n  box-shadow: 0 0 5px var(--crt-dialog-meter-shadow) !important;\n}\n\nhtml.dsh-crt-active [role='dialog'] [class*='_barTicks'] i {\n  background: color-mix(in srgb, var(--crt-meter-base) 82%, transparent) !important;\n}\n\n@keyframes dsh-crt-phosphor {\n  0%, 88%, 100% { filter: brightness(1) contrast(1); }\n  89% { filter: brightness(1.018) contrast(1.008); }\n  90% { filter: brightness(0.992) contrast(1.004); }\n  91% { filter: brightness(1.01) contrast(1); }\n}\n\n@media (max-width: 720px) {\n  html.dsh-crt-active button[role='tab'] {\n    padding-inline: 6px !important;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html.dsh-crt-active.dsh-crt-flicker body {\n    animation: none;\n  }\n}\n";
		const tagId = "@dsh-external/dsh-crt-theme/crt.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@dsh-external/dsh-crt-theme";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/settings.ts
		/** localStorage key persisting whether the CRT color scheme is applied. */
		const ENABLED_STORAGE_KEY = "dsh-crt-theme:enabled";
		/** localStorage key persisting whether the hardware-effect layer is on. */
		const EFFECTS_STORAGE_KEY = "dsh-crt-theme:effects";
		/** localStorage key persisting the selected CRT palette. */
		const SCHEME_STORAGE_KEY = "dsh-crt-theme:scheme";
		/** Palettes the Settings panel offers, in display order. */
		const SCHEME_OPTIONS = [{
			id: "unit02",
			label: "Unit-02",
			detail: "黑底红橙仪表、琥珀信号",
			swatch: [
				"#030202",
				"#ff641f",
				"#ffb000"
			]
		}, {
			id: "unit01",
			label: "Unit-01",
			detail: "黑紫仪表、酸性绿信号",
			swatch: [
				"#07050b",
				"#a948da",
				"#a7ed28"
			]
		}];
		/** Defaults for a fresh installation: skin on, effects on, Unit-02. */
		const DEFAULT_PREFERENCES = {
			enabled: true,
			effects: true,
			scheme: "unit02"
		};
		/** Resolve current and legacy public inputs to one stored scheme name. */
		function normalizeScheme(scheme) {
			return scheme === "unit01" || scheme === "violet" ? "unit01" : "unit02";
		}
		/**
		* Read one stored boolean, treating an unreadable or absent value as its default.
		* @param key - storage key.
		* @param fallback - value used when nothing usable is stored.
		* @returns the stored boolean or the fallback.
		*/
		function readBoolean(key, fallback) {
			try {
				const stored = localStorage.getItem(key);
				if (stored !== null) return stored !== "0";
			} catch {}
			return fallback;
		}
		/**
		* Read the last selected palette, migrating legacy names to their EVA successors.
		* @returns the stored palette or the default.
		*/
		function readScheme() {
			try {
				const stored = localStorage.getItem(SCHEME_STORAGE_KEY);
				if (stored !== null) return normalizeScheme(stored);
			} catch {}
			return DEFAULT_PREFERENCES.scheme;
		}
		/** Read every persisted preference, falling back per field. */
		function readPreferences() {
			return {
				enabled: readBoolean(ENABLED_STORAGE_KEY, DEFAULT_PREFERENCES.enabled),
				effects: readBoolean(EFFECTS_STORAGE_KEY, DEFAULT_PREFERENCES.effects),
				scheme: readScheme()
			};
		}
		/** In-memory preferences, seeded from storage and the panel's read source. */
		let current = readPreferences();
		/** Panel subscribers notified after every accepted change. */
		const listeners = /* @__PURE__ */ new Set();
		/**
		* Persist one storage entry on a best-effort basis.
		* @param key - storage key.
		* @param value - value to store.
		*/
		function persist(key, value) {
			try {
				localStorage.setItem(key, value);
			} catch {}
		}
		/** The current preferences; the returned object is replaced, never mutated. */
		function getPreferences() {
			return current;
		}
		/**
		* Merge one change into the preferences, persist it, and notify subscribers.
		* @param patch - the fields to change.
		* @returns the preferences after the change.
		*/
		function updatePreferences(patch) {
			current = {
				...current,
				...patch
			};
			persist(ENABLED_STORAGE_KEY, current.enabled ? "1" : "0");
			persist(EFFECTS_STORAGE_KEY, current.effects ? "1" : "0");
			persist(SCHEME_STORAGE_KEY, current.scheme);
			for (const listener of listeners) listener(current);
			return current;
		}
		/**
		* Subscribe to preference changes.
		* @param listener - called after every accepted change.
		* @returns the unsubscribe function.
		*/
		function subscribePreferences(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		}
		/**
		* Select a palette, accepting the legacy aliases this skin keeps supporting.
		* @param scheme - the requested palette.
		* @returns the preferences after the change.
		*/
		function selectScheme(scheme) {
			return updatePreferences({ scheme: normalizeScheme(scheme) });
		}
		//#endregion
		//#region src/client/settings-panel.tsx
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
		/** Toggle track geometry, shared by the track, thumb, and thumb travel. */
		const TRACK_WIDTH = 34;
		const TRACK_HEIGHT = 18;
		const THUMB_SIZE = 14;
		const THUMB_INSET = 2;
		/**
		* Render one switch row.
		* @param props - row copy, state, and change handler.
		* @returns the row element.
		*/
		function CrtToggleRow({ label, detail, checked, onChange }) {
			const onKeyDown = (0, react.useCallback)((event) => {
				if (event.key !== " " && event.key !== "Enter") return;
				event.preventDefault();
				onChange(!checked);
			}, [checked, onChange]);
			return (0, react.createElement)("div", { style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "16px",
				padding: "12px 0"
			} }, (0, react.createElement)("div", { style: {
				display: "grid",
				gap: "2px",
				minWidth: "0"
			} }, (0, react.createElement)("span", { style: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "13px"
			} }, label), (0, react.createElement)("span", { style: {
				color: "var(--dsw-alias-label-tertiary)",
				fontSize: "12px",
				lineHeight: "1.5"
			} }, detail)), (0, react.createElement)("button", {
				"aria-checked": checked,
				"aria-label": label,
				onClick: () => onChange(!checked),
				onKeyDown,
				role: "switch",
				style: {
					flex: "0 0 auto",
					position: "relative",
					width: `${TRACK_WIDTH}px`,
					height: `${TRACK_HEIGHT}px`,
					padding: "0",
					border: "1px solid var(--dsw-alias-border-l3)",
					borderRadius: "2px",
					background: checked ? "var(--dsw-alias-button-primary-fill)" : "var(--dsw-alias-bg-layer-2)",
					cursor: "pointer",
					transition: "background 120ms linear, border-color 120ms linear"
				},
				type: "button"
			}, (0, react.createElement)("span", { style: {
				position: "absolute",
				top: `${THUMB_INSET}px`,
				left: checked ? `16px` : `${THUMB_INSET}px`,
				width: `${THUMB_SIZE}px`,
				height: `${THUMB_SIZE}px`,
				background: checked ? "var(--dsw-alias-brand-primary-invert)" : "var(--dsw-alias-label-tertiary)",
				transition: "left 120ms linear, background 120ms linear"
			} })));
		}
		/**
		* Render one selectable palette card.
		* @param props - palette identity, preview colors, and selection state.
		* @returns the card element.
		*/
		function CrtSchemeCard({ id, label, detail, swatch, selected, onSelect }) {
			return (0, react.createElement)("button", {
				"aria-pressed": selected,
				onClick: () => onSelect(id),
				type: "button",
				style: {
					display: "grid",
					gap: "8px",
					padding: "10px",
					textAlign: "left",
					border: `1px solid ${selected ? "var(--dsw-alias-brand-primary)" : "var(--dsw-alias-border-l2)"}`,
					borderRadius: "2px",
					background: selected ? "var(--dsw-alias-button-ghost-active-fill)" : "var(--dsw-alias-bg-layer-1)",
					cursor: "pointer"
				}
			}, (0, react.createElement)("span", { style: {
				display: "flex",
				height: "22px",
				border: "1px solid var(--dsw-alias-border-l1)"
			} }, ...swatch.map((color) => (0, react.createElement)("span", {
				key: color,
				style: {
					flex: "1 1 0",
					background: color
				}
			}))), (0, react.createElement)("span", { style: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "13px"
			} }, label), (0, react.createElement)("span", { style: {
				color: "var(--dsw-alias-label-tertiary)",
				fontSize: "12px"
			} }, detail));
		}
		/**
		* Render the CRT skin's Settings section.
		* @returns the section element.
		*/
		function CrtSettingsPanel() {
			const [preferences, setPreferences] = (0, react.useState)(getPreferences);
			(0, react.useEffect)(() => subscribePreferences(setPreferences), []);
			const onToggleEnabled = (0, react.useCallback)((next) => {
				updatePreferences({ enabled: next });
			}, []);
			const onToggleEffects = (0, react.useCallback)((next) => {
				updatePreferences({ effects: next });
			}, []);
			const onSelectScheme = (0, react.useCallback)((next) => {
				selectScheme(next);
			}, []);
			return (0, react.createElement)("div", { style: {
				display: "grid",
				gap: "4px"
			} }, (0, react.createElement)("div", { style: {
				display: "grid",
				borderBottom: "1px solid var(--dsw-alias-border-l1)"
			} }, (0, react.createElement)(CrtToggleRow, {
				checked: preferences.enabled,
				detail: "关闭后立即恢复 DSH 原本的配色，面板保留可随时开启。",
				label: "启用 CRT 配色",
				onChange: onToggleEnabled
			}), (0, react.createElement)(CrtToggleRow, {
				checked: preferences.effects,
				detail: "扫描线、暗角、栅格与磷光闪烁叠加层。",
				label: "硬件特效",
				onChange: onToggleEffects
			})), (0, react.createElement)("div", { style: {
				display: "grid",
				gap: "8px",
				paddingTop: "14px"
			} }, (0, react.createElement)("span", { style: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "13px"
			} }, "配色方案"), (0, react.createElement)("div", { style: {
				display: "grid",
				gap: "8px",
				gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
			} }, ...SCHEME_OPTIONS.map((option) => (0, react.createElement)(CrtSchemeCard, {
				detail: option.detail,
				id: option.id,
				key: option.id,
				label: option.label,
				onSelect: onSelectScheme,
				selected: preferences.scheme === option.id,
				swatch: option.swatch
			})))));
		}
		//#endregion
		//#region src/client/index.ts
		/** Stable source id for the CRT theme's token override layer. */
		const THEME_ID = "dsh-crt";
		/** Class gating every CRT overlay effect in crt.css. */
		const ACTIVE_CLASS = "dsh-crt-active";
		/** Document attribute carrying the selected CRT palette to crt.css. */
		const SCHEME_ATTRIBUTE = "data-dsh-crt-scheme";
		/** Settings-dialog entry id and nav label for this skin's panel. */
		const SETTINGS_SECTION_ID = "dsh-crt-theme";
		const SETTINGS_SECTION_LABEL = "CRT 主题";
		/** Copy shown in the blank conversation hero while the CRT skin is installed. */
		const HERO_HEADLINE = "DEEPSEEK、袭来";
		/** Hero title owned by the conversation client, scoped by its root phase. */
		const HERO_HEADLINE_SELECTOR = "[data-phase='hero'] [class*='_headlineText']";
		/** Theme service required before this skin can install its palette layer. */
		const inject = ["theme", "slots"];
		/**
		* Unit-02 CRT palette: black instruments with red structure, orange controls,
		* and amber signal ink.
		*/
		const UNIT02_TOKENS = {
			"--dsw-alias-bg-base": "#030202",
			"--dsw-alias-bg-layer-1": "#080505",
			"--dsw-alias-bg-layer-2": "#100807",
			"--dsw-alias-bg-layer-3": "#180b07",
			"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.72)",
			"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.86)",
			"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.94)",
			"--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.82)",
			"--dsw-alias-bg-mask-photo": "#000000",
			"--dsw-alias-bg-module-platform": "#050303",
			"--dsw-alias-bg-multi-select": "rgba(255, 176, 0, 0.12)",
			"--dsw-alias-bg-overlay": "rgba(5, 2, 2, 0.96)",
			"--dsw-alias-bg-skeleton": "#180b07",
			"--dsw-alias-border-inverted": "#3a0d0a",
			"--dsw-alias-border-inverted2": "#260806",
			"--dsw-alias-border-l1": "#2b0907",
			"--dsw-alias-border-l2": "#5f1510",
			"--dsw-alias-border-l2-darkmode-thin": "#3a0d0a",
			"--dsw-alias-border-l3": "#811b12",
			"--dsw-alias-border-l4": "#ff641f",
			"--dsw-alias-brand-primary": "#ff641f",
			"--dsw-alias-brand-primary-invert": "#030202",
			"--dsw-alias-brand-primary-new-colorprimary-new-color": "#ffb000",
			"--dsw-alias-brand-text": "#ffd36a",
			"--dsw-alias-button-contrast-fill": "#ff641f",
			"--dsw-alias-button-elevated-fill": "#180b07",
			"--dsw-alias-button-floating-fill": "rgba(16, 8, 7, 0.94)",
			"--dsw-alias-button-floating-hover": "rgba(58, 13, 10, 0.96)",
			"--dsw-alias-button-ghost-active-border": "rgba(255, 100, 31, 0.64)",
			"--dsw-alias-button-ghost-active-fill": "rgba(255, 176, 0, 0.12)",
			"--dsw-alias-button-ghost-active-hover": "rgba(255, 100, 31, 0.2)",
			"--dsw-alias-button-info-fill": "rgba(255, 176, 0, 0.14)",
			"--dsw-alias-button-info-hover": "rgba(255, 100, 31, 0.24)",
			"--dsw-alias-button-primary-dimmed": "#8b3917",
			"--dsw-alias-button-primary-fill": "#ff641f",
			"--dsw-alias-button-primary-hover": "#ff8a36",
			"--dsw-alias-button-tool-bar-fill": "rgba(16, 8, 7, 0.86)",
			"--dsw-alias-button-tool-bar-fill-invisible": "rgba(16, 8, 7, 0.62)",
			"--dsw-alias-button-tool-bar-hover": "rgba(255, 100, 31, 0.14)",
			"--dsw-alias-interactive-bg-active": "rgba(255, 176, 0, 0.15)",
			"--dsw-alias-interactive-bg-hover": "rgba(255, 100, 31, 0.08)",
			"--dsw-alias-interactive-bg-hover-accent": "rgba(255, 176, 0, 0.11)",
			"--dsw-alias-interactive-bg-hover-danger": "rgba(255, 43, 36, 0.12)",
			"--dsw-alias-interactive-bg-hover-solid": "rgba(255, 100, 31, 0.16)",
			"--dsw-alias-label-caption": "#9f7257",
			"--dsw-alias-label-dimmed": "#684637",
			"--dsw-alias-label-primary": "#f6dfbd",
			"--dsw-alias-label-primary-bluish": "#f0cfa8",
			"--dsw-alias-label-primary-dimmed": "#c9a982",
			"--dsw-alias-label-primary-foreground": "#030202",
			"--dsw-alias-label-primary-inverted": "#180b07",
			"--dsw-alias-label-secondary": "#d0b694",
			"--dsw-alias-label-tertiary": "#9f7257",
			"--dsw-alias-markdown-citation": "rgba(255, 205, 120, 0.1)",
			"--dsw-alias-markdown-code-block": "#080505",
			"--dsw-alias-markdown-code-block-banner": "#180b07",
			"--dsw-alias-markdown-code-segment-selected": "rgba(255, 184, 77, 0.18)",
			"--dsw-alias-markdown-code-segment-unselected": "rgba(255, 184, 77, 0.07)",
			"--dsw-alias-markdown-inline-code": "rgba(255, 184, 77, 0.13)",
			"--dsw-alias-markdown-placeholder": "#66503b",
			"--dsw-alias-markdown-tag": "rgba(255, 184, 77, 0.12)",
			"--dsw-alias-scrollbar-bg-l1": "#3a0d0a",
			"--dsw-alias-scrollbar-bg-l2": "#180b07",
			"--dsw-alias-scrollbar-hover-l1": "#811b12",
			"--dsw-alias-scrollbar-hover-l2": "#ff641f",
			"--dsw-alias-state-business-primary": "#ffb000",
			"--dsw-alias-state-business-tertiary": "rgba(255, 176, 0, 0.14)",
			"--dsw-alias-state-error-primary": "#ff2b24",
			"--dsw-alias-state-error-secondary": "rgba(255, 43, 36, 0.14)",
			"--dsw-alias-state-success-primary": "#69ddb1",
			"--dsw-alias-state-success-secondary": "rgba(105, 221, 177, 0.16)",
			"--dsw-alias-state-success-tertiary": "rgba(105, 221, 177, 0.09)",
			"--dsw-alias-state-warn-label": "#ffb000",
			"--dsw-alias-state-warn-primary": "#ffb000",
			"--dsw-alias-state-warn-secondary": "rgba(255, 176, 0, 0.16)",
			"--dsw-alias-state-warn-tertiary": "rgba(255, 176, 0, 0.08)",
			"--dsw-alias-toast-bg": "rgba(0, 0, 0, 0.97)",
			"--dsw-alias-tooltip-bg": "#3a0d0a",
			"--dsw-specific-bubble": "#080505",
			"--dsw-specific-bubble-highlight": "#180b07",
			"--dsw-specific-input-major": "#080505",
			"--dsw-specific-login-input": "#080505",
			"--dsw-specific-menu": "#080505",
			"--dsw-specific-selector": "#100807",
			"--dsw-specific-sidebar-fill": "#050303",
			"--dsw-specific-sidebar-nav-item-active": "rgba(255, 176, 0, 0.13)",
			"--dsw-specific-sidebar-nav-item-active-accent": "#ffb000",
			"--dsw-specific-sidebar-nav-item-hover": "rgba(255, 100, 31, 0.08)",
			"--dsw-specific-tip": "rgba(255, 176, 0, 0.09)"
		};
		/** Palette tokens keyed by the user-selectable CRT scheme. */
		const SCHEME_TOKENS = {
			unit02: UNIT02_TOKENS,
			unit01: {
				...UNIT02_TOKENS,
				"--dsw-alias-bg-base": "#07050b",
				"--dsw-alias-bg-layer-1": "#0e0916",
				"--dsw-alias-bg-layer-2": "#171021",
				"--dsw-alias-bg-layer-3": "#21152f",
				"--dsw-alias-bg-mask-1": "rgba(7, 5, 11, 0.74)",
				"--dsw-alias-bg-mask-2": "rgba(7, 5, 11, 0.86)",
				"--dsw-alias-bg-mask-3": "rgba(7, 5, 11, 0.94)",
				"--dsw-alias-bg-mask-drop": "rgba(7, 5, 11, 0.84)",
				"--dsw-alias-bg-mask-photo": "#07050b",
				"--dsw-alias-bg-module-platform": "#0b0710",
				"--dsw-alias-bg-multi-select": "rgba(167, 237, 40, 0.11)",
				"--dsw-alias-bg-overlay": "rgba(14, 9, 22, 0.97)",
				"--dsw-alias-bg-skeleton": "#21152f",
				"--dsw-alias-border-inverted": "#2c123e",
				"--dsw-alias-border-inverted2": "#1d0d29",
				"--dsw-alias-border-l1": "#251032",
				"--dsw-alias-border-l2": "#3d1954",
				"--dsw-alias-border-l2-darkmode-thin": "#2c123e",
				"--dsw-alias-border-l3": "#5c2680",
				"--dsw-alias-border-l4": "#a948da",
				"--dsw-alias-brand-primary": "#a7ed28",
				"--dsw-alias-brand-primary-invert": "#07050b",
				"--dsw-alias-brand-primary-new-colorprimary-new-color": "#caff64",
				"--dsw-alias-brand-text": "#caff64",
				"--dsw-alias-button-contrast-fill": "#a7ed28",
				"--dsw-alias-button-elevated-fill": "#171021",
				"--dsw-alias-button-floating-fill": "rgba(23, 16, 33, 0.94)",
				"--dsw-alias-button-floating-hover": "rgba(44, 18, 62, 0.98)",
				"--dsw-alias-button-ghost-active-border": "rgba(167, 237, 40, 0.62)",
				"--dsw-alias-button-ghost-active-fill": "rgba(167, 237, 40, 0.1)",
				"--dsw-alias-button-ghost-active-hover": "rgba(169, 72, 218, 0.18)",
				"--dsw-alias-button-info-fill": "rgba(167, 237, 40, 0.14)",
				"--dsw-alias-button-info-hover": "rgba(167, 237, 40, 0.22)",
				"--dsw-alias-button-primary-dimmed": "#60851f",
				"--dsw-alias-button-primary-fill": "#a7ed28",
				"--dsw-alias-button-primary-hover": "#caff64",
				"--dsw-alias-button-tool-bar-fill": "rgba(23, 16, 33, 0.9)",
				"--dsw-alias-button-tool-bar-fill-invisible": "rgba(23, 16, 33, 0.66)",
				"--dsw-alias-button-tool-bar-hover": "rgba(169, 72, 218, 0.12)",
				"--dsw-alias-interactive-bg-active": "rgba(167, 237, 40, 0.13)",
				"--dsw-alias-interactive-bg-hover": "rgba(169, 72, 218, 0.09)",
				"--dsw-alias-interactive-bg-hover-accent": "rgba(167, 237, 40, 0.1)",
				"--dsw-alias-interactive-bg-hover-danger": "rgba(255, 106, 31, 0.12)",
				"--dsw-alias-interactive-bg-hover-solid": "rgba(169, 72, 218, 0.16)",
				"--dsw-alias-label-caption": "#9c8cac",
				"--dsw-alias-label-dimmed": "#62556f",
				"--dsw-alias-label-primary": "#e9e5d7",
				"--dsw-alias-label-primary-bluish": "#d8d3c6",
				"--dsw-alias-label-primary-dimmed": "#b8aec0",
				"--dsw-alias-label-primary-foreground": "#07050b",
				"--dsw-alias-label-primary-inverted": "#171021",
				"--dsw-alias-label-secondary": "#c3bac7",
				"--dsw-alias-label-tertiary": "#9c8cac",
				"--dsw-alias-markdown-citation": "rgba(167, 237, 40, 0.08)",
				"--dsw-alias-markdown-code-block": "#0e0916",
				"--dsw-alias-markdown-code-block-banner": "#21152f",
				"--dsw-alias-markdown-code-segment-selected": "rgba(167, 237, 40, 0.13)",
				"--dsw-alias-markdown-code-segment-unselected": "rgba(169, 72, 218, 0.07)",
				"--dsw-alias-markdown-inline-code": "rgba(169, 72, 218, 0.12)",
				"--dsw-alias-markdown-placeholder": "#62556f",
				"--dsw-alias-markdown-tag": "rgba(167, 237, 40, 0.09)",
				"--dsw-alias-scrollbar-bg-l1": "#2c123e",
				"--dsw-alias-scrollbar-bg-l2": "#171021",
				"--dsw-alias-scrollbar-hover-l1": "#5c2680",
				"--dsw-alias-scrollbar-hover-l2": "#a948da",
				"--dsw-alias-state-business-primary": "#a7ed28",
				"--dsw-alias-state-business-tertiary": "rgba(167, 237, 40, 0.12)",
				"--dsw-alias-state-error-primary": "#ff6a1f",
				"--dsw-alias-state-error-secondary": "rgba(255, 106, 31, 0.13)",
				"--dsw-alias-state-success-primary": "#76e7c7",
				"--dsw-alias-state-success-secondary": "rgba(118, 231, 199, 0.14)",
				"--dsw-alias-state-success-tertiary": "rgba(118, 231, 199, 0.08)",
				"--dsw-alias-state-warn-label": "#f0c838",
				"--dsw-alias-state-warn-primary": "#f0c838",
				"--dsw-alias-state-warn-secondary": "rgba(240, 200, 56, 0.13)",
				"--dsw-alias-state-warn-tertiary": "rgba(240, 200, 56, 0.07)",
				"--dsw-alias-toast-bg": "rgba(14, 9, 22, 0.98)",
				"--dsw-alias-tooltip-bg": "#2c123e",
				"--dsw-specific-bubble": "#0e0916",
				"--dsw-specific-bubble-highlight": "#21152f",
				"--dsw-specific-input-major": "#0e0916",
				"--dsw-specific-login-input": "#0e0916",
				"--dsw-specific-menu": "#0e0916",
				"--dsw-specific-selector": "#171021",
				"--dsw-specific-sidebar-fill": "#0b0710",
				"--dsw-specific-sidebar-nav-item-active": "rgba(167, 237, 40, 0.11)",
				"--dsw-specific-sidebar-nav-item-active-accent": "#a7ed28",
				"--dsw-specific-sidebar-nav-item-hover": "rgba(169, 72, 218, 0.09)",
				"--dsw-specific-tip": "rgba(167, 237, 40, 0.08)"
			}
		};
		/** Convert one scheme to the theme service's mandatory light/dark override form. */
		function schemeOverrides(scheme) {
			return Object.fromEntries(Object.entries(SCHEME_TOKENS[scheme]).map(([name, value]) => [name, {
				light: value,
				dark: value
			}]));
		}
		/** Official DeepSeek fish silhouette used as the clip for the CRT scan stripes. */
		const CRT_WHALE_PATH = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";
		/**
		* Render a flat CRT whale for the sidebar and blank-session brand slots.
		* @param props - placement supplied by the owning DSH surface.
		* @returns an accessible-decorative terminal whale icon.
		*/
		function CrtWhaleMark({ size, className }) {
			const silhouetteId = `dsh-crt-whale-${(0, react.useId)().replaceAll(":", "")}`;
			const stripeId = `${silhouetteId}-stripes`;
			return (0, react.createElement)("svg", {
				"aria-hidden": true,
				className,
				"data-crt-whale-mark": "true",
				focusable: "false",
				height: size * 17.04 / 23.16,
				viewBox: "-0.6 -0.6 24.36 18.24",
				width: size
			}, (0, react.createElement)("defs", null, (0, react.createElement)("pattern", {
				id: stripeId,
				patternUnits: "userSpaceOnUse",
				width: 24,
				height: 2.05
			}, (0, react.createElement)("rect", {
				fill: "currentColor",
				height: 1.18,
				width: 24
			}), (0, react.createElement)("rect", {
				fill: "currentColor",
				height: .18,
				opacity: .34,
				width: 24,
				y: 1.54
			})), (0, react.createElement)("path", {
				d: CRT_WHALE_PATH,
				id: silhouetteId
			})), (0, react.createElement)("use", {
				fill: `url(#${stripeId})`,
				href: `#${silhouetteId}`
			}), (0, react.createElement)("use", {
				fill: "none",
				href: `#${silhouetteId}`,
				opacity: .78,
				stroke: "currentColor",
				strokeLinejoin: "miter",
				strokeWidth: .24
			}), (0, react.createElement)("path", {
				d: "M0.35 16.92H7.15M15.2 16.92h5.7M0.35 16.45h3.5",
				fill: "none",
				opacity: .56,
				stroke: "currentColor",
				strokeWidth: .22
			}));
		}
		/**
		* Activate the browser half: install the CRT token layer, effect layer, and
		* keyboard shortcut. Everything unwinds on dispose.
		* @param ctx - plugin context.
		*/
		function apply(ctx) {
			const theme = ctx.get("theme");
			const slots = ctx.get("slots");
			if (slots === void 0) return;
			let releaseTokens;
			let scheme = getPreferences().scheme;
			const syncPreferences = () => {
				const preferences = getPreferences();
				if (theme === void 0) scheme = preferences.scheme;
				else if (preferences.enabled) {
					scheme = preferences.scheme;
					releaseTokens = theme.overrideTokens(THEME_ID, schemeOverrides(scheme));
				} else {
					releaseTokens?.();
					releaseTokens = void 0;
				}
				document.documentElement.setAttribute(SCHEME_ATTRIBUTE, scheme);
				document.documentElement.classList.toggle(ACTIVE_CLASS, preferences.effects);
			};
			ctx.effect(() => {
				syncPreferences();
				const unsubscribe = subscribePreferences(syncPreferences);
				return () => {
					unsubscribe();
					releaseTokens?.();
					releaseTokens = void 0;
				};
			});
			slots.inject("settings.section", () => slots.register({
				id: SETTINGS_SECTION_ID,
				label: () => SETTINGS_SECTION_LABEL,
				name: "settings.section",
				order: 50
			}, CrtSettingsPanel));
			slots.inject("sidebar.brand.mark", () => slots.inject("conversation.hero.brand.mark", function* () {
				yield slots.register({ name: "sidebar.brand.mark" }, CrtWhaleMark);
				yield slots.register({ name: "conversation.hero.brand.mark" }, CrtWhaleMark);
			}));
			const heroTitles = /* @__PURE__ */ new Map();
			const applyHeroHeadline = () => {
				for (const title of document.querySelectorAll(HERO_HEADLINE_SELECTOR)) {
					if (!heroTitles.has(title)) heroTitles.set(title, {
						ariaLabel: title.getAttribute("aria-label"),
						text: title.textContent ?? ""
					});
					if (title.textContent !== HERO_HEADLINE) title.textContent = HERO_HEADLINE;
					title.setAttribute("aria-label", HERO_HEADLINE);
				}
			};
			applyHeroHeadline();
			const headlineObserver = new MutationObserver(applyHeroHeadline);
			headlineObserver.observe(document.body, {
				characterData: true,
				childList: true,
				subtree: true
			});
			const onKeyDown = (event) => {
				if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.altKey && event.code === "KeyC") {
					event.preventDefault();
					updatePreferences({ effects: !getPreferences().effects });
				}
				if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.altKey && event.code === "KeyP") {
					event.preventDefault();
					updatePreferences({ scheme: getPreferences().scheme === "unit02" ? "unit01" : "unit02" });
				}
			};
			document.addEventListener("keydown", onKeyDown);
			const api = {
				enable: () => updatePreferences({ enabled: true }),
				disable: () => updatePreferences({ enabled: false }),
				toggle: () => updatePreferences({ enabled: !getPreferences().enabled }),
				isActive: () => getPreferences().enabled,
				getScheme: () => getPreferences().scheme,
				setScheme: (next) => updatePreferences({ scheme: normalizeScheme(next) }),
				toggleScheme: () => updatePreferences({ scheme: getPreferences().scheme === "unit02" ? "unit01" : "unit02" }),
				version: "0.8.1"
			};
			window.DSHCRT = api;
			ctx.effect(() => () => {
				headlineObserver.disconnect();
				for (const [title, { ariaLabel, text }] of heroTitles) {
					if (!title.isConnected) continue;
					title.textContent = text;
					if (ariaLabel === null) title.removeAttribute("aria-label");
					else title.setAttribute("aria-label", ariaLabel);
				}
				document.removeEventListener("keydown", onKeyDown);
				if (window.DSHCRT === api) delete window.DSHCRT;
				document.documentElement.classList.remove(ACTIVE_CLASS);
				document.documentElement.removeAttribute(SCHEME_ATTRIBUTE);
			});
		}
		//#endregion
		exports.THEME_ID = THEME_ID;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map