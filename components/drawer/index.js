import { Controller } from '@hotwired/stimulus'
import { onCommand } from '../../index.js'

export class Drawer extends Controller {
  static targets = ['content']

  static values = {
    placement: {
      type: String,
      default: 'left',
    },
    modal: {
      type: Boolean,
      default: true,
    },
  }

  connect() {
    this.showModal = HTMLDialogElement.prototype.showModal
    this.show = HTMLDialogElement.prototype.show
    this.close = HTMLDialogElement.prototype.close
    this.abortController = new AbortController()

    this.element.addEventListener('command', onCommand, { signal: this.abortController.signal })

    this.element.showModal = async ({ source }) => {
      const { showDrawer } = await import('winduum/src/components/drawer/index.js')

      this.triggerElement = source

      if (this.element.open) return

      if (this.modalValue) this.showModal.call(this.element)
      else this.show.call(this.element)

      source.ariaExpanded = true
      showDrawer(this.element.firstElementChild, this.placementValue)
    }

    this.element.close = () => {
      this.close.call(this.element)

      if (this.triggerElement) this.triggerElement.ariaExpanded = false
    }
  }

  disconnect() {
    delete this.element.showModal
    delete this.element.close
    this.abortController?.abort()
  }

  async contentTargetConnected() {
    const { drawerObserver, drawerEvents } = await import('winduum/src/components/drawer/index.js')

    drawerEvents(this.element, this.contentTarget, this.placementValue, this.abortController.signal)

    this.observer = drawerObserver(this.element, this.placementValue)
    this.observer.observe(this.contentTarget)
  }

  contentTargetDisconnected() {
    this.observer?.disconnect()
  }
}
