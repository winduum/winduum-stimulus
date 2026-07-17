# 3.0.0-next.1 (2026-07-17)
* feat!: drawer now uses native Invoker Commands — `show`, `close` and `toggle` actions removed
* feat: added shared `onCommand` helper for command-driven components
* fix: popover now removes its command listener, positioning fallback and overridden element methods on disconnect

# 3.0.0-next.0 (2026-07-02)
* feat!: updated components to Winduum `3.0.0-next.7` (aligned with `winduum-elements`)
* feat!: carousel rewritten to new API (`scrollBy`, `toggleScrollState`, `setSnappedAttribute`, `scrollToMarker`) — `pagination`, `counter` and `progress` targets replaced by `markerGroup`/`marker` targets and `vertical` value
* feat!: drawer rewritten to new dialog-based API (`drawerEvents`, `drawerObserver`, `showDrawer`) — `dialog` value replaced by boolean `modal` value
* feat!: popover rewritten to native Popover API with anchor positioning and `@floating-ui` fallback (`autoUpdate`, `placement` values)
* feat!: removed dialog and details components (handled natively in Winduum 3)
* feat!: form component now only validates on submit — field validation moved to the new field component
* feat: added field component
* feat: control component now toggles `data-active` attribute on change
* feat: button component now shows ripple on click automatically
* feat: toaster component now uses `toasterObserver`
* fix: range component no longer calls `setTrackProperty` (handled internally by `setValue`)

# 2.0.10, 2.0.11 (2025-04-30)
* feat: added carousel component

# 2.0.9 (2024-12-16)
* fix: currentTarget event lost after await

# 2.0.8 (2024-12-16)
* fix: invoke event param

# 2.0.7 (2024-11-28)
* feat: added x-drawer dismiss method

# 2.0.6 (2024-11-15)
* fix: button loading bug

# 2.0.5 (2024-10-30)
* fix: toast import typo

# 2.0.4 (2024-10-30)
* feat: added InvokeFetch class variant

# 2.0.3 (2024-10-29)
* feat: added disabled attribute on loading state of a button component

# 2.0.2 (2024-10-23)
* feat: deps update

# 2.0.1 (2024-10-22)
* feat: added initActions and initControllers utils

# 2.0.0 (2024-10-08)
* feat: initial version
