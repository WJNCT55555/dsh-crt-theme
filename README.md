# DeepSeek Tactical CRT Theme

`@dsh-external/dsh-crt-theme` is a browser-only DSH skin that turns DSH Web into a readable instrument terminal. It includes a black/red/orange/amber Unit-02 display and a black-violet/acid-green/magenta Unit-01 display, with condensed labels, flat cut-corner controls, fine diagonal progress tracks, dense vertical context meters, a restrained scanline layer, aperture grille, and glass-edge vignette.

The visual direction is an original 1990s industrial sci-fi terminal treatment. It does not ship or redraw DeepSeek, Evangelion, or other third-party brand assets, logos, or interface text.

## Install

### GitHub

Install the published build directly into a DSH Web profile:

```sh
dsh plugin --profile web add github:WJNCT55555/dsh-crt-theme
dsh web
```

The repository keeps `lib/` under version control, so this path does not require a local TypeScript toolchain.

### Local checkout

```powershell
cd dsh-crt-theme
dsh plugin --profile web add .
dsh web
```

The bundle inserts the `dsh-crt-theme` loader row. If the profile already contains the row, remove the duplicate before enabling the bundle.

The skin installs a caller-owned DSH theme token layer when it loads. Unloading the plugin restores the normal DSH palette preference.

## Visual system

- Unit-02 is the tactical palette: black surfaces, red structure, orange controls, warm amber signal ink, and teal success states.
- Unit-01 is the synchronization palette: black-violet surfaces, magenta structure, acid-green signal ink, and orange alerts.
- Both schemes preserve each DSH control's native chrome: borderless text and icon actions stay borderless, while component-owned outlines receive the CRT palette.
- `Orbitron` is preferred when it is already installed locally; the skin falls back to bundled system fonts and does not fetch remote font files.
- The skin leaves compact icon buttons to their owning DSH components, so fixed-size toolbars retain their original geometry.
- Page-view tabs remain transparent labels; their selected state uses a short left indicator and an underline instead of a button container.
- Task and completion tracks use a thin diagonal CRT fill; the context breakdown keeps its semantic colors in dense 3 px vertical cells.
- The conversation composer keeps DSH's transparent editing layer so its backdrop-rendered draft text remains visible over the dark CRT surface.
- A blank conversation opens with `DEEPSEEK、袭来` and a scan-striped DeepSeek whale mark; the sidebar carries the same mark.
- Brand text and session rows remain unframed navigation text, using only hover fill and a short selected-state indicator.
- The existing DSH shell stays intact: the skin adds no tactical status bar or decorative header above the product chrome.
- The achievements gallery keeps its own content layout while inheriting the condensed type, hard edges, buttons, and fine CRT meters.

## Controls

- `Ctrl+Shift+Alt+C` on Windows/Linux, or `Cmd+Shift+Alt+C` on macOS: toggle scanlines, vignette, grille, and phosphor flicker.
- `Ctrl+Shift+Alt+P` on Windows/Linux, or `Cmd+Shift+Alt+P` on macOS: switch between Unit-02 and Unit-01 CRT palettes.
- `window.DSHCRT.enable()`, `.disable()`, `.toggle()`, `.setScheme('unit02' | 'unit01')`, and `.toggleScheme()` are available for local development. The former `amber` and `violet` inputs remain accepted as aliases.
- The selected CRT palette is stored under `dsh-crt-theme:scheme`; the hardware-effect toggle is stored under `dsh-crt-theme:effects`.

The effect layer respects `prefers-reduced-motion` and removes all global state when the plugin is unloaded.

## Compatibility

- Requires the DSH Web client token, slots, conversation, sidebar, and theme packages available in DSH `0.1.0-rc.8` or newer.
- It can be installed with `dsh-achievements` and `dsh-web-preview-float`. It owns one theme-token layer and styles their controls only visually; it adds no routes, tools, persistence, or host services.
- Do not enable a second full-page theme plugin at the same time: the later token layer and CSS rules win where they overlap.
