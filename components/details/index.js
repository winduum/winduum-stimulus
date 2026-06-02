import { Controller } from '@hotwired/stimulus'

export class Details extends Controller {
  async show({ currentTarget, params }) {
    const { showDetails } = await import('winduum/src/components/details/index.js')

    await showDetails(currentTarget, params)
  }

  async close({ currentTarget, params }) {
    const { closeDetails } = await import('winduum/src/components/details/index.js')

    await closeDetails(currentTarget, params)
  }

  async toggle({ currentTarget, params }) {
    const { toggleDetails } = await import('winduum/src/components/details/index.js')

    this.closeSiblings({ params })

    await toggleDetails(currentTarget, params)
  }

  closeSiblings({ params }) {
    if (!this.element.dataset.name) return

    document.querySelectorAll(`details[data-name="${this.element.dataset.name}"]`).forEach((currentTarget) => {
      if (currentTarget !== this.element) this.close({ currentTarget, params })
    })
  }

  connect() {
    if (this.element.name) {
      this.element.dataset.name = this.element.name
      this.element.removeAttribute('name')
    }
  }
}
