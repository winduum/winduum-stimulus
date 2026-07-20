import { Controller } from '@hotwired/stimulus'

export class Toaster extends Controller {
  async connect() {
    const { toasterObserver } = await import('winduum/src/components/toaster/index.js')

    this.observer = toasterObserver()
    this.observer.observe(this.element, { childList: true })
  }

  disconnect() {
    this.observer?.disconnect()
  }

  async close(event) {
    const { closeToaster } = await import('winduum/src/components/toaster/index.js')

    await closeToaster(this.element, event?.params)
  }
}
