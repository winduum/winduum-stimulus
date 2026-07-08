import { Controller } from '@hotwired/stimulus'
import { supportsAnchoredContainer, supportsAnchor } from 'winduum/src/common.js'

export class Popover extends Controller {
  static values = {
    autoUpdate: Boolean,
    placement: String,
  }

  open = false

  connect() {
    this.showPopover = HTMLElement.prototype.showPopover
    this.hidePopover = HTMLElement.prototype.hidePopover
    this.abortController = new AbortController()

    this.element.addEventListener('toggle', (event) => {
      this.open = event.newState === 'open'
      if (this.source?.ariaExpanded) this.source.ariaExpanded = this.open
    }, { signal: this.abortController.signal })

    this.element.addEventListener('command', (e) => {
      e.preventDefault()

      const method = e.command.replace(/-\w/g, c => c[1].toUpperCase())

      if (method in this.element) this.element[method](e)
    })

    this.element.showPopover = async ({ source }) => {
      if ((this.autoUpdateValue && !supportsAnchoredContainer) || !supportsAnchor) {
        const { autoUpdatePopover } = await import('winduum/src/components/popover/index.js')

        this.cleanup = await autoUpdatePopover(source, this.element, this.placementValue, this.autoUpdateValue)
      }

      this.source = source

      this.showPopover.call(this.element, { source })
    }

    this.element.togglePopover = ({ source }) => {
      !this.open
        ? this.element.showPopover({ source })
        : this.element.hidePopover()
    }

    this.element.hidePopover = () => {
      this.cleanup?.()

      this.hidePopover.call(this.element)
    }
  }

  disconnect() {
    this.abortController?.abort()
  }
}
