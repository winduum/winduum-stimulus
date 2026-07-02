import { Controller } from '@hotwired/stimulus'

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
    this.abortController = new AbortController()

    this.element.addEventListener('close', () => {
      if (this.triggerElement) this.triggerElement.ariaExpanded = false
    }, { signal: this.abortController.signal })
  }

  disconnect() {
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

  async show({ currentTarget }) {
    const { showDrawer } = await import('winduum/src/components/drawer/index.js')

    this.triggerElement = currentTarget

    if (this.element.open) return
    if (this.modalValue) this.element.showModal()
    else this.element.show()

    currentTarget.ariaExpanded = true
    showDrawer(this.element.firstElementChild, this.placementValue)
  }

  close() {
    this.element.close()
  }

  toggle(event) {
    if (this.element.open) this.close()
    else this.show(event)
  }
}
