import { Controller } from '@hotwired/stimulus'
import { supportsAnchoredContainer, supportsAnchor } from 'winduum/src/common.js'

export class Popover extends Controller {
  static values = {
    autoUpdate: Boolean,
    placement: String,
  }

  open = false

  connect() {
    this.abortController = new AbortController()

    this.element.addEventListener('toggle', (event) => {
      this.open = event.newState === 'open'
      if (this.source?.ariaExpanded) this.source.ariaExpanded = this.open
    }, { signal: this.abortController.signal })
  }

  disconnect() {
    this.abortController?.abort()
  }

  async show({ currentTarget }) {
    if ((this.autoUpdateValue && !supportsAnchoredContainer) || !supportsAnchor) {
      const { autoUpdatePopover } = await import('winduum/src/components/popover/index.js')

      this.cleanup = await autoUpdatePopover(currentTarget, this.element, this.placementValue, this.autoUpdateValue)
    }

    this.source = currentTarget

    this.element.showPopover({ source: currentTarget })
  }

  toggle({ currentTarget }) {
    !this.open
      ? this.element.showPopover({ source: currentTarget })
      : this.element.hidePopover()
  }

  hide() {
    this.cleanup?.()

    this.element.hidePopover()
  }
}
