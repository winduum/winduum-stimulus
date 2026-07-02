import { Controller } from '@hotwired/stimulus'
import { dataset } from '@newlogic-digital/utils-js'
import { supportsAnchoredContainer, supportsAnchor } from 'winduum/src/common.js'

export class Popover extends Controller {
  static targets = ['action']

  static values = {
    autoUpdate: Boolean,
    placement: String,
  }

  open = false

  connect() {
    this.abortController = new AbortController()
  }

  disconnect() {
    this.abortController?.abort()
  }

  actionTargetConnected() {
    this.popoverElement = document.getElementById(this.actionTarget.getAttribute('popovertarget'))

    this.popoverElement?.addEventListener('toggle', (event) => {
      this.open = event.newState === 'open'
      if (this.actionTarget.ariaExpanded) this.actionTarget.ariaExpanded = this.open
    }, { signal: this.abortController.signal })

    dataset(this.actionTarget, 'action').add(
      `click->${this.identifier}#${this.actionTarget.getAttribute('popovertargetaction') ?? 'toggle'}:prevent`,
    )
  }

  async show() {
    if ((this.autoUpdateValue && !supportsAnchoredContainer) || !supportsAnchor) {
      const { autoUpdatePopover } = await import('winduum/src/components/popover/index.js')

      this.cleanup = await autoUpdatePopover(this.actionTarget, this.popoverElement, this.placementValue, this.autoUpdateValue)
    }

    this.popoverElement.showPopover({ source: this.actionTarget })
  }

  toggle() {
    !this.open
      ? this.show()
      : this.hide()
  }

  hide() {
    this.cleanup?.()

    this.popoverElement.hidePopover()
  }
}
